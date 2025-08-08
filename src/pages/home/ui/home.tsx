import { CarouselBtn, MoreinfoImg } from '@entities/home'
import { MoreinfoNumber } from '@entities/home/ui/moreinfo-number'
import { WithAuth } from '@hooks/with-auth'
import { cn } from '@lib/utils'
import { Carousel, CarouselContent, CarouselItem } from '@ui/_shardcn/carousel'
import { Billboard } from '@widgets/home'
import { useFetchMovies } from 'src/shared/models'
import { useFetchRank } from 'src/shared/models/rank.mode'

function Home() {
	const { data: moviesData } = useFetchMovies({ take: 10 })
	const { data: rankData } = useFetchRank()

	if (!rankData) return <div className="h-screen flex-center">Loading...</div>

	return (
		<div className="relative flex min-w-full flex-col">
			<Billboard />

			<div className="relative z-10 mt-[36rem] w-full max-w-[100vw] overflow-hidden">
				<h2 className="relative mb-4 common-padding Medium-Title3">Today's Top 10 Series in South Korea</h2>
				<div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,hsla(0,0%,8%,0)_0,hsla(0,0%,8%,.15)_15%,hsla(0,0%,8%,.35)_29%,hsla(0,0%,8%,.58)_44%,#141414_68%,#000)]" />
				<Carousel opts={{ slidesToScroll: 'auto' }}>
					<CarouselContent className="px-14">
						{rankData.map((rank: any, index: number) => (
							<CarouselItem
								key={index}
								className={cn(
									'relative w-1/5 basis-1/5 cursor-pointer rounded',
									index === 9 ? 'content-center' : 'overflow-hiddenn',
								)}
							>
								<MoreinfoNumber
									index={index}
									thumbnail={
										rank.thumbnail ||
										'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZBBzO2ah6e8jDtxRZSfj9yLbwahyF_o1XO9c-wD2YwnElJFAlSg8ko3ztz0DW6qWOQtr7mu-WtuC7Q8p9wFeefTkzGOApKArWuA75nBJRVMGbqllFX2mV4XNQN1l3c__dfX77IfBBzpAv1j7LX1rqRXVdn0TYmi1Wf3K46x0EncKfZgGIAakdCy4Bi2RfF9o4_fu72QElhxWZFeF5-4zihIO9YcCJYGg8IPkNzRNJtE9eauURdPyVSoDfbgkmDBH5nkbOXAkahFefyFQf150kqHyT733VAdQDMEx9wexRlw4_EFBiVGlyPiR_hhxEZmBjrcitMYuSWMffinS9yjFG6yVlUiDIgigDsPUx9doHbixxa1nCihkOJloFIFY3f_dPgw09wDTMgWHnzn1nxnbG79yU3yUu_mBi9pz4G3_ESvBlIlkx_vwKJ92c8KARJUaH76bOuXje1BbDF5tXF_aB-xPBjTTRlqEMVNxw.jpg?r=944'
									}
									rankId={rank.id}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselBtn />
				</Carousel>
			</div>

			<div className="mt-12">
				<h2 className="mb-4 common-padding Medium-Title3">Matched to you</h2>
				<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
					<CarouselContent className="px-14">
						{moviesData?.data.map((movie, index) => (
							<CarouselItem key={index} className={cn('basis-1/5 cursor-pointer transition-all duration-700')}>
								<MoreinfoImg movieImage={movie.thumbnail} movieId={movie.id} />
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselBtn />
				</Carousel>
			</div>
		</div>
	)
}

export default WithAuth(Home, 3, '/landing')
