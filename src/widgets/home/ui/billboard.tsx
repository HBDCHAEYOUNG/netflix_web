import { Moreinfo } from '@entities/home'
import ButtonPlay from '@features/video/ui/button-play'
import { movieDetail } from '@pages/home'

interface BillboardProps {
	movietitle: string
	movieDetail: typeof movieDetail
}

export function Billboard({ movietitle, movieDetail }: BillboardProps) {
	return (
		<section className="max-w-screen relative overflow-hidden pb-4">
			<video autoPlay loop muted className="absolute max-w-[1512px]">
				<source src="https://videos.pexels.com/video-files/9116110/9116110-uhd_2560_1440_25fps.mp4" type="video/mp4" />
			</video>

			<div className="relative h-[712px] content-end pb-12 common-padding">
				<img src={movietitle} alt="movietitle:House of ninjas" className="w-[450px]" />
				<p className="mt-4 w-[518px] Regular-Title4">
					Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a
					string of looming threats.
				</p>
				<nav className="mt-4 flex gap-4">
					<ButtonPlay />
					<Moreinfo movieDetail={movieDetail} />
				</nav>
			</div>
		</section>
	)
}
