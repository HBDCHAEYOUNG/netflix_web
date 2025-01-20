import PlayIcon from '@icons/play.svg?react'
import { Link } from 'react-router-dom'

function ButtonPlay() {
	return (
		<Link to="/play" className="h-10 w-[119px] rounded-md bg-Primary/White text-Primary/Black flex-center hover:opacity-80">
			<PlayIcon className="mr-3 [&>path]:fill-black" />
			Play
		</Link>
	)
}

export default ButtonPlay
