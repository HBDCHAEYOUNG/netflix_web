import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

interface MoreInfoImgProps {
	movieImage: string
	movieId: number
}

export function MoreinfoImg({ movieId, movieImage }: MoreInfoImgProps) {
	return (
		<Dialog>
			<DialogTrigger className="aspect-[23/13] w-full">
				<img src={movieImage} alt="아델리펭귄" className="aspect-[23/13] h-full rounded-md object-cover" />
			</DialogTrigger>
			<DialogContent>
				<Detail movieId={movieId} />
			</DialogContent>
		</Dialog>
	)
}
