import { CarouselBtn, MoreinfoImg } from '@entities/home'
import { MoreinfoNumber } from '@entities/home/ui/moreinfo-number'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { Billboard } from '@widgets/home'
import { useFetchBanner, useFetchMovies } from 'src/shared/models'
import { movieDetail, movies, top10 } from '../const/home'

function Home() {
	const { data, isLoading } = useFetchBanner()
	const { data: moviesData } = useFetchMovies(0, '')
	return (
		<div className="flex min-w-full flex-col">
			<Billboard movieDetail={movieDetail} isLoading={isLoading} bannerData={data} />

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

			<div className="mt-8 w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{moviesData?.data.map((movie, index) => (
							<CarouselItem key={index} className={cn('basis-1/5 cursor-pointer transition-all duration-700')}>
								<MoreinfoImg
									movieImage="https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT-QluA7qJRE6WnLFefO6LrzXTCJSNDrG50CONz6Lz8DI9-z3SAValsqr6Dm3hTk0jbPYikgRMNakph2QIgZqUKybkGl8STwXZYsEwO8lrqR0LE_FMHIEvS16oJfy727U65K.jpg?r=169"
									movieId={movie.id}
								/>
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
									'relative w-1/5 basis-1/5 cursor-pointer rounded',
									index === 0 && 'mr-2',
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
