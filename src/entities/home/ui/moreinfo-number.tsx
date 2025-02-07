import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'

interface MoreinfoNumberProps {}

import Number1 from '@icons/number1.svg?react'
import Number10 from '@icons/number10.svg?react'
import Number2 from '@icons/number2.svg?react'
import Number3 from '@icons/number3.svg?react'
import Number4 from '@icons/number4.svg?react'
import Number5 from '@icons/number5.svg?react'
import Number6 from '@icons/number6.svg?react'
import Number7 from '@icons/number7.svg?react'
import Number8 from '@icons/number8.svg?react'
import Number9 from '@icons/number9.svg?react'
import { cn } from '@lib/utils'

export const numbers = [Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10]

interface MoreinfoNumberProps {
	index: number
	smallmovie: string
	movieDetail: any
}

export function MoreinfoNumber({ index, smallmovie, movieDetail }: MoreinfoNumberProps) {
	const NumberComponent = numbers[index]

	return (
		<Dialog>
			<DialogTrigger>
				<NumberComponent className={index === 9 ? 'h-40 py-4 pr-20' : 'absolute left-0 top-0 w-1/2'} />
				<img
					src={smallmovie}
					alt="smallmovie"
					className={cn('absolute top-0 h-[168px] rounded-sm', index === 9 ? 'left-[52%]' : 'left-auto right-1')}
				/>
			</DialogTrigger>
			<DialogContent>
				<Detail movieDetail={movieDetail} />
			</DialogContent>
		</Dialog>
	)
}
