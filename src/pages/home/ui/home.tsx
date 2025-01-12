import { VideoCard } from '@features/home/ui/video-card'
import Info from '@icons/info.svg?react'
import Play from '@icons/play.svg?react'
import smallmovie from '@images/movie-card-small.png'
import movietitle from '@images/movie-title.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/_shardcn/carousel'
import Button from '@ui/button/button'
import { movies } from '../const/home'

function Home() {
	return (
		<div className="flex min-w-full flex-col">
			<section>
				<video autoPlay loop muted className="absolute max-w-[1562px]">
					<source src="https://videos.pexels.com/video-files/9140346/9140346-uhd_2560_1440_25fps.mp4" type="video/mp4" />
				</video>

				<div className="relative h-[712px] content-end pb-12 common-padding">
					<img src={movietitle} alt="movietitle:House of ninjas" className="w-[450px]" />
					<p className="mt-4 w-[518px] Regular-Title4">
						Years after retiring from their formidable ninja lives, a dysfunctional family must return to shadowy missions to counteract a
						string of looming threats.
					</p>
					<nav className="mt-4 flex gap-4">
						<Button theme="white" className="max-w-[119px]">
							<Play className="mr-3 [&>path]:fill-black" />
							Play
						</Button>
						<Button theme="secondary" className="max-w-[161px]">
							<Info className="mr-3" />
							More info
						</Button>
					</nav>
				</div>
			</section>

			<div>
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<Carousel opts={{ loop: true, slidesToScroll: 'auto', dragFree: true }} className="ml-14">
					<CarouselContent className="-ml-[4vw]">
						{movies.map((movie, index) => (
							<CarouselItem key={index} className={cn('w-1/5 basis-1/5 cursor-pointer pl-2 hover:!scale-150')}>
								<VideoCard movie={movie} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer bg-black/50" />
					<CarouselNext className="absolute right-0 top-1/2 h-full w-[4vw] -translate-y-1/2 cursor-pointer bg-black/50" />
				</Carousel>
			</div>

			<div className="relative mt-8">
				<h2 className="absolute left-0 top-2 common-padding Medium-Title3">Today's Top 10 Series in South Korea</h2>

				<Carousel opts={{ loop: true, slidesToScroll: 'auto' }} className="ml-14">
					<CarouselContent className="relative">
						{[...Array(9)].map((_, index) => (
							<CarouselItem key={index} className="basis-auto pl-24">
								<p
									className="text-[215px] font-extrabold text-transparent [-webkit-text-stroke:4px_rgba(255,255,255,0.3)]"
									aria-hidden="true"
								>
									{index + 1}
								</p>
								<img src={smallmovie} alt="smallmovie" className="absolute left-[82%] top-1/2 z-20 -translate-y-[63%]" />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
					<CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
				</Carousel>
			</div>
		</div>
	)
}

export default Home
