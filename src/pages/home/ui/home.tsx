import { VideoCard } from '@features/home/ui/video-card'
import Info from '@icons/info.svg?react'
import Play from '@icons/play.svg?react'
import smallmovie from '@images/movie-card-small.png'
import movietitle from '@images/movie-title.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/_shardcn/carousel'
import Button from '@ui/button/button'
import { movies } from '../const/home'

import Number1 from '@icons/number1.svg?react'
import Number2 from '@icons/number2.svg?react'
import Number3 from '@icons/number3.svg?react'
import Number4 from '@icons/number4.svg?react'
import Number5 from '@icons/number5.svg?react'
import Number6 from '@icons/number6.svg?react'
import Number7 from '@icons/number7.svg?react'
import Number8 from '@icons/number8.svg?react'
import Number9 from '@icons/number9.svg?react'
import Number10 from '@icons/number10.svg?react'

function Home() {
	return (
		<div className="flex min-w-full flex-col">
			<section>
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
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{movies.map((movie, index) => (
							<CarouselItem key={index} className={cn('w-1/5 basis-1/5 cursor-pointer transition-all duration-300 hover:!scale-125')}>
								<VideoCard movie={movie} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
					<CarouselNext className="absolute right-0 top-1/2 h-full w-14 -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
				</Carousel>
			</div>

			<div className="relative mt-8">
				<h2 className="mb-4 common-padding Medium-Title3">Today's Top 10 Series in South Korea</h2>

				<Carousel opts={{ slidesToScroll: 'auto' }}>
					<CarouselContent>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number1 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number2 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number3 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number4 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number5 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number6 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number7 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number8 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer">
							<Number9 className="h-52" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer content-center">
							<Number10 className="h-40" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-[77%] top-0 h-[208px]" />
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
					<CarouselNext className="absolute right-0 top-1/2 h-full w-[4vw] -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
				</Carousel>
			</div>
		</div>
	)
}

export default Home
