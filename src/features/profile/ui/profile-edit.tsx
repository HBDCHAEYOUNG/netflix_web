import Pencil from '@icons/pencil.svg?react'

interface ProfileUserProps {
	image: string
	name: string
	onClick: () => void
}

export function ProfileEdit({ image, name, onClick }: ProfileUserProps) {
	return (
		<div
			key={name}
			className="flex-col gap-4 flex-center [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-Grey/Grey-200 [&>p]:hover:text-Grey/Grey-20"
			onClick={onClick}
		>
			<div className="relative aspect-square w-[144px] rounded-sm flex-center">
				<img src={image} alt={name} className="rounded-sm opacity-40" />
				<Pencil className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2 [&_path]:fill-white" />
			</div>
			<p className="text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
