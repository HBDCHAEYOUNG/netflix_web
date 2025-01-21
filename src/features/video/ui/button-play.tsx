import PlayIcon from '@icons/play.svg?react'

interface ButtonPlayProps {
	children: React.ReactNode
	className?: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	onClick?: () => void
}

function ButtonPlay({ onClick }: ButtonPlayProps) {
	return (
		<button className="h-10 w-[119px] rounded-md bg-Primary/White text-Primary/Black flex-center hover:opacity-80" onClick={onClick}>
			<PlayIcon className="mr-3 [&>path]:fill-black" />
			Play
		</button>
	)
}

export default ButtonPlay
