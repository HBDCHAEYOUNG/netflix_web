import { CarouselBtn, Moreinfo, MoreinfoImg } from '@entities/home'
import { MoreinfoNumber } from '@entities/home/ui/moreinfo-number'
import ButtonPlay from '@features/video/ui/button-play'
import movietitle from '@images/movie-title.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { movieDetail, movies, top10 } from '../const/home'

function Home() {
	return (
		<div className="flex min-w-full flex-col">
			<section className="max-w-screen relative overflow-hidden pb-4">
				<video autoPlay loop muted className="absolute max-w-[1512px]">
					<source src="https://videos.pexels.com/video-files/9140346/9140346-uhd_2560_1440_25fps.mp4" type="video/mp4" />
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
				<div className="absolute bottom-[-150px] left-0 h-[150px] w-full bg-gradient-to-b from-transparent to-Primary/Black"></div>
			</section>

			<div className="mt-8 w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{movies.map((movie, index) => (
							<CarouselItem key={index} className={cn('w-1/5 basis-1/5 cursor-pointer transition-all duration-700')}>
								<MoreinfoImg movieImage={movie.image} movieDetail={movieDetail} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselBtn />
				</Carousel>
			</div>

			<div className="mt-8">
				<h2 className="mb-4 common-padding Medium-Title3">Today's Top 10 Series in South Korea</h2>

				<Carousel opts={{ slidesToScroll: 'auto' }}>
					<CarouselContent className="px-14">
						{top10.map((smallmovie, index) => (
							<CarouselItem
								key={index}
								className={cn(
									'relative w-1/6 basis-1/6 cursor-pointer rounded',
									index === 0 && 'mr-6',
									index === 9 ? 'content-center' : 'overflow-hiddenn',
								)}
							>
								<MoreinfoNumber index={index} smallmovie={smallmovie} movieDetail={movieDetail} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselBtn />
				</Carousel>
			</div>
		</div>
	)
}

export default Home
