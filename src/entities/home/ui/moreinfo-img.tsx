import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

interface MoreInfoImgProps {
	movieImage: string
	movieId: number
}

export function MoreinfoImg({ movieId, movieImage }: MoreInfoImgProps) {
	return (
		<Dialog>
			<DialogTrigger>
				<img
					//src="https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					src={movieImage}
					alt="아델리펭귄"
				/>
			</DialogTrigger>
			<DialogContent>
				<Detail movieId={movieId} />
			</DialogContent>
		</Dialog>
	)
}
