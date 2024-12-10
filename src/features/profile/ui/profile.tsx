import { ProfileImg } from '@ui/index'

interface ProfileUserProps {
	image: string
	name: string
	onClick: () => void
}

export function Profile({ image, name, onClick }: ProfileUserProps) {
	return (
		<li
			key={name}
			className="mx-auto mr-[2vw] w-[10vw] min-w-[84px] max-w-[200px] [&:hover]:cursor-pointer [&>div]:hover:outline [&>div]:hover:outline-Primary/White [&>p]:hover:text-Primary/White"
			onClick={onClick}
		>
			<ProfileImg image={image} />
			<p className="my-2 !text-center text-Grey/Grey-200 Regular-Headline">{name}</p>
		</li>
	)
}
