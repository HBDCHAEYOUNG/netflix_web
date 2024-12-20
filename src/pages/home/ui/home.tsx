import { VideoCard } from '@features/home/ui/video-card'
import Info from '@icons/info.svg?react'
import Play from '@icons/play.svg?react'
import smallmovie from '@images/movie-card-small.png'
import movietitle from '@images/movie-title.png'
import movie from '@images/movie.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/_shardcn/carousel'
import Button from '@ui/button/button'
import { movies } from '../const/home'

function Home() {
	return (
		<div className="flex flex-col">
			<section>
				<img src={movie} alt="movieimage:House of ninjas" className="w-full" />
				<div className="absolute left-[20px] top-1/2 max-w-[518px] -translate-y-1/2">
					<img src={movietitle} alt="movietitle:House of ninjas" />
					<p className="mt-4">
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
				<h2 className="my-4">Matched to You</h2>
				<Carousel opts={{ loop: true, slidesToScroll: 4, watchDrag: false }}>
					<CarouselContent className="-ml-[4vw]">
						{movies.map((movie, index) => (
							<CarouselItem key={index} className={cn('w-1/4 basis-1/4 cursor-pointer pl-[0.2vw] hover:!scale-150')}>
								<VideoCard movie={movie} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer bg-black/50" />
					<CarouselNext className="absolute right-0 top-1/2 h-full w-[4vw] -translate-y-1/2 cursor-pointer bg-black/50" />
				</Carousel>
			</div>
			<div>
				<Carousel opts={{ loop: true, slidesToScroll: 'auto' }}>
					<CarouselContent>
						{[...Array(10)].map((_, index) => (
							<CarouselItem key={index} className="relative basis-auto pl-16">
								<div className="relative w-[154px] text-[200px] font-extrabold" data-content={index + 1}>
									<p
										className="absolute left-0 top-0 z-0 text-transparent [-webkit-text-stroke:4px_rgba(255,255,255,0.3)]"
										aria-hidden="true"
									>
										{index + 1}
									</p>
									{/* <p className="z-10 text-Primary/Black">{index + 1}</p> */}
									<img src={smallmovie} alt="smallmovie" className="absolute left-2/3 top-1/2 z-20 -translate-y-1/2" />
								</div>
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
