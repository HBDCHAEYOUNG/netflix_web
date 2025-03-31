import { MoreinfoPlus } from '@entities/home/ui/moreinfo-plus'
import ArrowIcon from '@icons/arrowdown.svg?react'
import { useFetchRecommendations } from 'src/shared/models'

interface RecommendationsProps {
	movieId: number
}

export function Recommendations({ movieId }: RecommendationsProps) {
	const { data: Movies, fetchNextPage } = useFetchRecommendations(movieId, 6)
	return (
		<div className="relative">
			<div className="px-12 pb-6 pt-16 Medium-Title3">Content viewed together</div>
			<ol className="grid grid-cols-3 gap-6 px-12">
				{Movies?.pages.map((page: any) =>
					page.data.map((item: any, index: number) => (
						<li key={index} className="overflow-hidden rounded-sm bg-Grey/Grey-550">
							<img src={item.thumbnail} alt={item.title} className="aspect-video w-full object-cover" />
							<div className="p-3 pb-20 [&_*]:!text-Grey/Grey-25">
								<div className="flex items-center gap-3 py-4">
									<span className="aspect-square size-9 rounded-sm bg-Secondary/Yellow-100 p-1 text-3xl font-extrabold">
										12
									</span>
									{item.createdAt.slice(0, 4)}
									{item.id && <MoreinfoPlus movieId={item.id} />}
								</div>
								<p className="Regular-Body">{item.detail.detail}</p>
							</div>
						</li>
					)),
				)}
			</ol>
			<div className="absolute bottom-0 left-0 h-14 w-full bg-[linear-gradient(180deg,hsla(0,0%,8%,0)_0,hsla(0,0%,8%,.15)_15%,hsla(0,0%,8%,.35)_25%,hsla(0,0%,8%,.58)_40%,#181818_95%,#181818)]" />
			<div className="relative mx-[48px] border-b border-Grey/Grey-200 flex-center">
				<ArrowIcon
					className="absolute top-[-20px] mx-auto h-10 w-10 cursor-pointer rounded-full border-2 border-Grey/Grey-200 bg-Grey/Grey-850 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
					onClick={() => fetchNextPage()}
				/>
			</div>
		</div>
	)
}
