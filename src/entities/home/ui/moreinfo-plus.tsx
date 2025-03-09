import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

import PlusIcon from '@icons/plus.svg?react'

interface MoreinfoPlusProps {
	movieId: number
}

export function MoreinfoPlus({ movieId }: MoreinfoPlusProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<PlusIcon className="ml-auto h-9 w-9 cursor-pointer rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200" />
			</DialogTrigger>
			<DialogContent>
				<Detail movieId={movieId} />
			</DialogContent>
		</Dialog>
	)
}
