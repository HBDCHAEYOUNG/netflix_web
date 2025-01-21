import Info from '@icons/info.svg?react'
import smallmovie from '@images/movie-card-small.png'
import movietitle from '@images/movie-title.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@ui/_shardcn/carousel'
import Button from '@ui/button/button'
import { movies } from '../const/home'

import Number1 from '@icons/number1.svg?react'
import Number10 from '@icons/number10.svg?react'
import Number2 from '@icons/number2.svg?react'
import Number3 from '@icons/number3.svg?react'
import Number4 from '@icons/number4.svg?react'
import Number5 from '@icons/number5.svg?react'
import Number6 from '@icons/number6.svg?react'
import Number7 from '@icons/number7.svg?react'
import Number8 from '@icons/number8.svg?react'
import Number9 from '@icons/number9.svg?react'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'
import { useState } from 'react'
import ButtonPlay from '@features/video/ui/button-play'

function Home() {
	const [isHovered, setIsHovered] = useState(false)
	console.log(isHovered)
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
						<ButtonPlay onClick={() => {}} />
						<Dialog>
							<DialogTrigger>
								<Button theme="secondary" className="w-[161px]">
									<Info className="mr-3" />
									More info
								</Button>
							</DialogTrigger>
							<DialogContent>
								<Detail />
							</DialogContent>
						</Dialog>
					</nav>
				</div>
				<div className="absolute bottom-[-150px] left-0 h-[150px] w-full bg-gradient-to-b from-transparent to-Primary/Black"></div>
			</section>

			<div className="mt-8 w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{movies.map((movie, index) => (
							<CarouselItem
								onMouseOver={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
								key={index}
								className={cn('w-1/5 basis-1/5 cursor-pointer transition-all duration-700')}
							>
								<Dialog>
									<DialogTrigger>
										<img
											// src="https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
											src={movie.image}
											alt="아델리펭귄"
										/>
									</DialogTrigger>
									<DialogContent>
										<Detail />
									</DialogContent>
								</Dialog>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
					<CarouselNext className="absolute right-0 top-1/2 h-full w-14 -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
				</Carousel>
			</div>

			<div className="mt-8">
				<h2 className="mb-4 common-padding Medium-Title3">Today's Top 10 Series in South Korea</h2>

				<Carousel opts={{ slidesToScroll: 'auto' }}>
					<CarouselContent className="px-14">
						<CarouselItem className="relative mr-6 w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number1 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number2 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number3 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number4 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number5 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number6 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number7 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number8 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative w-1/5 basis-1/5 cursor-pointer overflow-hidden rounded">
							<Number9 className="absolute left-0 top-0 w-1/2" />
							<img src={smallmovie} alt="smallmovie" className="absolute left-auto right-0 top-0 h-[208px] w-1/2" />
						</CarouselItem>
						<CarouselItem className="relative mr-[150px] w-1/5 basis-1/5 cursor-pointer content-center rounded">
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
