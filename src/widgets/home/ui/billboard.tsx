import { Moreinfo } from '@entities/home'
import ButtonPlay from '@features/video/ui/button-play'
import { movieDetail } from '@pages/home'
import { useFetchMovie } from 'src/shared/models'

interface BillboardProps {
	movieDetail: typeof movieDetail
	isLoading: boolean
	bannerData: any
}

export function Billboard({ movieDetail, isLoading, bannerData }: BillboardProps) {
	const moviePath = `http://localhost:3000/${bannerData?.movieFilePath}`
	const { data: movieData } = useFetchMovie(bannerData?.id)
	return (
		<>
			{isLoading ? (
				<div className="h-screen flex-center">
					<p>Loading...</p>
				</div>
			) : (
				<section className="max-w-screen relative overflow-hidden pb-4">
					<video autoPlay loop muted preload="auto" className="absolute w-[1512px] object-fill">
						<source src={moviePath} type="video/mp4" />
					</video>

					<div className="relative h-[712px] content-end pb-12 common-padding">
						<h1 className="w-[270px] text-7xl font-extrabold [text-shadow:_3px_3px_3px_#000000ab]">{bannerData?.title}</h1>
						<p className="mt-4 w-[518px] Regular-Title4">{movieData?.detail.detail}</p>
						<nav className="mt-4 flex gap-4">
							<ButtonPlay />
							<Moreinfo movieDetail={movieDetail} />
						</nav>
					</div>
				</section>
			)}
		</>
	)
}
