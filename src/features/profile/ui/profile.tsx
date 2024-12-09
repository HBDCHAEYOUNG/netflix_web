interface ProfileUserProps {
	image: React.ReactNode | string
	name: string
	onClick: () => void
}

export function Profile({ image, name, onClick }: ProfileUserProps) {
	return (
		<div
			key={name}
			className="flex-col gap-4 flex-center [&:hover]:cursor-pointer [&>div:hover]:outline [&>div:hover]:outline-Primary/White [&>div]:hover:bg-Primary/White [&>p]:hover:text-Primary/White [&_path]:hover:fill-white"
			onClick={onClick}
		>
			<div className="aspect-square w-[144px] rounded-sm flex-center">
				{typeof image === 'string' ? <img src={image} alt={name} className="rounded-sm" /> : image}
			</div>
			<p className="text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</div>
	)
}
