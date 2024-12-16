import movie from '@images/movie.png'
import movietitle from '@images/movie-title.png'
import Button from '@ui/button/button'
import Play from '@icons/play.svg?react'
import Info from '@icons/info.svg?react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/_shardcn/carousel'
import { movies } from '../const/home'
import { VideoCard } from '@features/home/ui/video-card'

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
				<Carousel opts={{ loop: true, slidesToScroll: 'auto' }}>
					<CarouselContent>
						{[...movies, ...movies, ...movies].map((movie, index) => (
							<CarouselItem key={index} className="relative basis-auto pl-1">
								<VideoCard movie={movie} />
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
