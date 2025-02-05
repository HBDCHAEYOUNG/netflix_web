import { Outlet } from 'react-router-dom'
import { WatchHeader } from './watch-header'

function WatchLayout() {
	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base">
			<WatchHeader />
			<Outlet />
		</div>
	)
}

export default WatchLayout
