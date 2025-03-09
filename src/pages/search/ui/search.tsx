import { WithAuth } from '@hooks/with-auth'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'
import { useSearchParams } from 'react-router-dom'
import { useFetchMovies } from 'src/shared/models'

function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword')
	const { data } = useFetchMovies({ take: 10, title: query || '', order: ['id_DESC'] })
	if (!query || !data) return <div className="h-screen flex-center">loading...</div>
	if (data.data.length === 0)
		return (
			<div className="mx-auto flex w-fit flex-col items-start gap-4 pb-96 pt-32">
				<p>There are no results matching your search term "{query}".</p>
				<span className="flex w-fit flex-col items-start">
					<p>Suggested search terms:</p>
					<ul className="list-disc pl-10">
						<li>Please try entering another keyword.</li>
						<li>Are you looking for a movie?</li>
						<li>Search by movie title.</li>
					</ul>
				</span>
			</div>
		)

	return (
		<div className="pb-96 pt-32 common-padding">
			<h2 className="text-center">"{query}" 검색결과입니다.</h2>
			<div className="grid grid-cols-5 gap-x-[6px] gap-y-10 pt-4">
				{data.data.map((item, index) => (
					<Dialog key={index}>
						<DialogTrigger>
							<img
								src={item.thumbnail}
								alt={item.title}
								className="aspect-video h-auto w-full rounded-md object-cover"
							/>
						</DialogTrigger>
						<DialogContent>
							<Detail movieId={item.id} />
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	)
}

export default WithAuth(Search)
