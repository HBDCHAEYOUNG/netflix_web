import ArrowBackIcon from '@icons/arrow-left.svg?react'
import { useNavigate } from 'react-router-dom'

export function WatchHeader() {
	const navigate = useNavigate()
	return (
		<div className="fixed left-0 top-0 z-10 px-12 py-9">
			<ArrowBackIcon className="h-9 w-9 cursor-pointer" onClick={() => navigate(-1)} />
		</div>
	)
}
