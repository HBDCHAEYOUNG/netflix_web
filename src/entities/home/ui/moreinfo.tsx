import Button from '@ui/button/button'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

import InfoIcon from '@icons/info.svg?react'
import { movieDetail } from '@pages/home'

interface MoreinfoProps {
	movieDetail: typeof movieDetail
}

export function Moreinfo({ movieDetail }: MoreinfoProps) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button theme="secondary" className="w-[161px]">
					<InfoIcon className="mr-3" />
					More info
				</Button>
			</DialogTrigger>
			<DialogContent>
				<Detail movieDetail={movieDetail} />
			</DialogContent>
		</Dialog>
	)
}
