import Button from '@ui/button/button'
import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

import InfoIcon from '@icons/info.svg?react'
import { GetMoviesBannerResDtoDto } from 'src/shared/api/data-contracts'

interface MoreinfoProps {
	movieDetail: GetMoviesBannerResDtoDto
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
