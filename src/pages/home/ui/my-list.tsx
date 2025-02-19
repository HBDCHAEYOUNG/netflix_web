import { Dialog, DialogContent, DialogTrigger } from '@ui/index'
import { Detail } from '@widgets/home'
import { useFetchWishlist } from 'src/shared/models'

export function MyList() {
	const { data } = useFetchWishlist()
	console.log(data)
	if (!data) return <div>데이터가 없습니다.</div>
	return (
		<div className="pt-32 common-padding">
			<h2 className="Bold-Title2">My List</h2>
			<div className="grid grid-cols-5 gap-x-[6px] gap-y-10 pt-4">
				{data.map((item, index) => (
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
							<Detail movieDetail={data} />
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	)
}
