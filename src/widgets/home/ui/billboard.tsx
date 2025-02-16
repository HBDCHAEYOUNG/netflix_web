import { Moreinfo } from '@entities/home'
import ButtonPlay from '@features/video/ui/button-play'
import { useFetchBanner } from 'src/shared/models'

export function Billboard() {
	const { data: bannerData, isLoading } = useFetchBanner()

	const movieFilePath = bannerData?.movieFilePath
		? bannerData.movieFilePath
		: 'https://videos.pexels.com/video-files/15375094/15375094-uhd_2560_1440_30fps.mp4'
	return (
		<>
			{isLoading ? (
				<div className="absolute">
					<p>Loading...</p>
				</div>
			) : (
				<section className="max-w-screen absolute max-h-screen overflow-hidden">
					<div className="absolute z-10 h-full w-1/2 bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-transparent to-85%"></div>

					<video autoPlay loop muted preload="auto" className="relative aspect-video w-screen overflow-hidden">
						<source src={movieFilePath} type="video/mp4" className="object-fill" />
					</video>

					<div className="absolute bottom-1/2 z-10 translate-y-1/2 common-padding">
						<h1 className="w-[300px] text-6xl font-extrabold [text-shadow:_3px_3px_3px_#000000ab]">{bannerData?.title}</h1>
						<p className="mt-4 w-[518px] Regular-Title4">{bannerData?.detail.detail}</p>
						<nav className="mt-4 flex gap-4">
							<ButtonPlay movieId={bannerData?.id} />
							<Moreinfo movieDetail={bannerData!} />
						</nav>
					</div>
				</section>
			)}
		</>
	)
}
