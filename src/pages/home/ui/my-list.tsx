import { WithAuth } from '@hooks/with-auth'
import { Dialog, DialogContent, DialogTrigger } from '@ui/index'
import { Detail } from '@widgets/home'
import { useFetchWishlist } from 'src/shared/models'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import LoadingIcon from '@icons/loading.svg?react'
function MyList() {
	const { data, fetchNextPage, hasNextPage } = useFetchWishlist(16)

	const { ref, inView } = useInView({
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.5,
	})

	useEffect(() => {
		if (inView) {
			fetchNextPage()
		}
	}, [inView])
	return (
		<div className="pb-[410px] pt-20 common-padding">
			<h2 className="mb-24 Bold-Title2">My List</h2>
			{data && data.pages[0].count > 0 ? (
				<div className="grid grid-cols-4 gap-x-[6px] gap-y-10 pt-4">
					{data.pages.map((page) =>
						page.data.map((item, index) => {
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
											ref={index === page.data.length - 1 ? ref : undefined}
										/>
									</DialogTrigger>
									<DialogContent>
										<Detail movieId={item.id} />
									</DialogContent>
								</Dialog>
							)
						}),
					)}
				</div>
			) : (
				<div className="flex-center">Add your favorite content 🎉</div>
			)}
			{hasNextPage && <LoadingIcon className="mx-auto my-10 h-8 w-8 animate-spin" />}
		</div>
	)
}

export default WithAuth(MyList)
