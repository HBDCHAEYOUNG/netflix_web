import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Home from '@pages/home/ui/home'
import { Test } from '@pages/home/ui/test'

export const HomeRoute = {
	path: '/',
	element: <CommonLayout headerType="home" />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'test', element: <Test /> },
	],
	errorElement: <ErrorLayout />,
}
