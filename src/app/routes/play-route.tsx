import PlayLayout from '@app/layouts/play-layout'
import { Play } from '@pages/video/ui/play'

export const PlayRoute = {
	path: '/play',
	element: <PlayLayout />,
	children: [{ index: true, element: <Play /> }],
}
