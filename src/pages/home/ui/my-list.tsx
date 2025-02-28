import { WithAuth } from '@hooks/with-auth'
import { Dialog, DialogContent, DialogTrigger } from '@ui/index'
import { Detail } from '@widgets/home'
import { useFetchWishlist } from 'src/shared/models'

function MyList() {
	const { data: wishlist } = useFetchWishlist(10, 1)
	// const useWishlist = useFetchWishlist

	// const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
	// 	queryKey: ['movies'],
	// 	queryFn: async () => {
	// 		return useWishlist(10, 1)
	// 	},
	// 	initialPageParam: undefined,
	// 	getNextPageParam: (lastPage) => {
	// 		return lastPage + 1
	// 	},
	// })

	if (!data) return <div className="h-screen flex-center">데이터가 없습니다.</div>

	return (
		<div className="pt-32 common-padding">
			<h2 className="Bold-Title2">My List</h2>
			<div className="grid grid-cols-2 gap-x-[6px] gap-y-10 pt-4">
				{wishlist &&
					wishlist.map((item, index) => {
						return (
							<Dialog key={index}>
								<DialogTrigger>
									<img
										src={
											item.thumbnail ||
											'https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
										}
										alt={item.title}
										className="aspect-video h-auto w-full rounded-md"
									/>
								</DialogTrigger>
								<DialogContent>
									<Detail movieId={item.id} />
								</DialogContent>
							</Dialog>
						)
					})}
			</div>
		</div>
	)
}

export default WithAuth(MyList)
