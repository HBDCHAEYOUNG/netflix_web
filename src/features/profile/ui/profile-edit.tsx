import Pencil from '@icons/pencil.svg?react'
import { ProfileImg } from '@ui/index'

interface ProfileUserProps {
	image: string
	name: string
	onClick: () => void
}

export function ProfileEdit({ image, name, onClick }: ProfileUserProps) {
	return (
		<div
			key={name}
			className="mx-auto mr-[2vw] w-[10vw] min-w-[84px] max-w-[200px] [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-Grey/Grey-200 [&>p]:hover:text-Grey/Grey-20"
			onClick={onClick}
		>
			<div className="relative">
				<div className="absolute z-10 h-full w-full bg-black/50" />
				<ProfileImg image={image} className="relative" />
				<Pencil className="absolute left-1/2 top-1/2 z-20 size-4 -translate-x-1/2 -translate-y-1/2 [&_path]:fill-white" />
			</div>

			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
