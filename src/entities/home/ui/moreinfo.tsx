import Button from '@ui/button/button'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

import InfoIcon from '@icons/info.svg?react'

interface MoreinfoProps {
	movieId: number
}

export function Moreinfo({ movieId }: MoreinfoProps) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button theme="secondary" className="w-[161px]">
					<InfoIcon className="mr-3" />
					More info
				</Button>
			</DialogTrigger>
			<DialogContent>
				<Detail movieId={movieId} />
			</DialogContent>
		</Dialog>
	)
}
