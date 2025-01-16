import Pencil from '@icons/pencil.svg?react'
import { ProfileImg } from '@ui/index'

interface ProfileUserProps {
	image: string
	name: string
	onClick: () => void
}

export function ProfileEdit({ image, name, onClick }: ProfileUserProps) {
	return (
		<div key={name} className="mx-auto w-[154px] [&:hover]:cursor-pointer [&>p]:hover:text-Grey/Grey-20" onClick={onClick}>
			<div className="relative rounded-md hover:border-[3px] hover:border-Grey/Grey-200">
				<div className="absolute z-10 h-full w-full bg-black/50" />
				<ProfileImg image={image} className="relative" />
				<Pencil className="absolute left-1/2 top-1/2 z-20 size-8 -translate-x-1/2 -translate-y-1/2 [&_path]:fill-white" />
			</div>

			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
