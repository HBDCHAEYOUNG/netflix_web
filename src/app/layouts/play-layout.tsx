import { Outlet } from 'react-router-dom'
import { PlayHeader } from './play-header'

function PlayLayout() {
	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base">
			<PlayHeader />
			<Outlet />
		</div>
	)
}

export default PlayLayout
