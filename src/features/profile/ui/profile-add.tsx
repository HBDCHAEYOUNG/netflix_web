import { cn } from '@lib/utils'
import PlusIcon from '@icons/circle-plus.svg?react'

interface ProfileAddProps {
	onClick: () => void
	className?: string
}

export function ProfileAdd({ onClick, className }: ProfileAddProps) {
	return (
		<div className={cn('flex-col flex-center [&:hover]:cursor-pointer [&>p]:hover:text-Grey/Grey-20', className)} onClick={onClick}>
			<div className="relative aspect-square w-[154px] rounded-sm flex-center hover:bg-Grey/Grey-20 [&_path]:hover:fill-white">
				<div className="mx-auto aspect-square rounded-sm flex-center">
					<PlusIcon />
				</div>
			</div>
			<p className="my-2 w-full !text-center text-Grey/Grey-200 Regular-Headline">Add Profile</p>
		</div>
	)
}
