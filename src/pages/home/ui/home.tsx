import { CarouselBtn, MoreinfoImg } from '@entities/home'
import { MoreinfoNumber } from '@entities/home/ui/moreinfo-number'
import movietitle from '@images/movie-title.png'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { movieDetail, movies, top10 } from '../const/home'
import { Billboard } from '@widgets/home'

function Home() {
	return (
		<div className="flex min-w-full flex-col">
			<Billboard movietitle={movietitle} movieDetail={movieDetail} />

			<div className="mt-8 w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{movies.map((movie, index) => (
							<CarouselItem key={index} className={cn('basis-1/5 cursor-pointer transition-all duration-700')}>
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
