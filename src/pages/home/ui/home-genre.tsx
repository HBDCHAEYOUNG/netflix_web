import { WithAuth } from '@hooks/with-auth'
import { Dialog, DialogContent, DialogTrigger } from '@ui/index'
import { Detail } from '@widgets/home'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSearchParams } from 'react-router-dom'
import { useInfiniteFetchMovies } from 'src/shared/models'
import { useFetchGenres } from 'src/shared/models/genre.model'
import LoadingIcon from '@icons/loading.svg?react'

export function HomeGenre() {
	const { data: moviesData, fetchNextPage, hasNextPage } = useInfiniteFetchMovies(12)
	const { data: genresData } = useFetchGenres(1, 0)
	const [searchParams] = useSearchParams()
	const genreId = genresData?.data.find((item) => item.name === searchParams.get('genre'))?.id
	const { ref, inView } = useInView({
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.5,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])
	return (
		<div className="pb-96 pt-52 common-padding">
			<div className="grid grid-cols-4 gap-x-[6px] gap-y-10 pt-4">
				{moviesData?.pages.map((page) =>
					page.data
						.filter((item) => !genreId || item.genres.some((genre) => genre.id === genreId))
						.map((item, index, array) => (
							<Dialog key={item.id}>
								<DialogTrigger>
									<img
										ref={index === array.length - 1 ? ref : undefined}
										src={item.thumbnail}
										alt={item.title}
										className="aspect-video h-auto w-full rounded-md"
									/>
								</DialogTrigger>
								<DialogContent>
									<Detail movieId={item.id} />
								</DialogContent>
							</Dialog>
						)),
				)}
			</div>
			{hasNextPage && <LoadingIcon className="mx-auto my-10 h-8 w-8 animate-spin" />}
		</div>
	)
}

export default WithAuth(HomeGenre)
