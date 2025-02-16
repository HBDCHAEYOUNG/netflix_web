import WatchLayout from '@app/layouts/watch-layout'
import { Watch } from '@pages/watch/ui/watch'

export const WatchRoute = {
	path: '/watch',
	element: <WatchLayout />,
	children: [{ path: '/watch/:movieId', element: <Watch /> }],
}
