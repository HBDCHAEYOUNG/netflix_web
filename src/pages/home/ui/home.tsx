import { CarouselBtn, MoreinfoImg } from '@entities/home'
import { MoreinfoNumber } from '@entities/home/ui/moreinfo-number'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { Billboard } from '@widgets/home'
import { useFetchMovies } from 'src/shared/models'
import { useFetchRank } from 'src/shared/models/rank.mode'

function Home() {
	const { data: moviesData } = useFetchMovies(0, '')
	const { data: rankData } = useFetchRank()

	if (!rankData) return <div className="h-screen flex-center">Loading...</div>

	return (
		<div className="relative flex min-w-full flex-col">
			<Billboard />

			<div className="relative z-10 mt-[36rem] w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Matched to You</h2>
				<div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,hsla(0,0%,8%,0)_0,hsla(0,0%,8%,.15)_15%,hsla(0,0%,8%,.35)_29%,hsla(0,0%,8%,.58)_44%,#141414_68%,#141414)]" />
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
						{rankData.map((rank, index) => (
							<CarouselItem
								key={index}
								className={cn(
									'relative w-1/5 basis-1/5 cursor-pointer rounded',
									index === 0 && 'mr-2',
									index === 9 ? 'content-center' : 'overflow-hiddenn',
								)}
							>
								<MoreinfoNumber
									index={index}
									thumbnail="https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcNInkNIJxwTsZF7brdRHpF5po-zUTT6kxs30iG9IPinXs5aFZEl04_Won-2xQxwoSLcfZmMZBYf7R2FBA1I1j2_0VLvO64rA-JLy-IsWp0rl445i2Ty5ekAwGVWCGVSO1-jtX6N7rBjwOS2LqRdAnuc0h5Bqeosv1ncwZRQjYc-rq8ossZDiD4mDkxcA9A_nz0ycCxPejcoTsu85e3NqTfsLUxIrxT1uw4S-Rl7d4Baq51KkLTGA2oLl2CEU8PCnCR8OLjnQyD4PYkgQzbTP6jXIYODAPcdq08XwvnS1QscBFK2Seibc-15.jpg?r=e8f"
									rankId={rank.id}
								/>
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
