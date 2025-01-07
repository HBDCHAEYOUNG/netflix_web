import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Home from '@pages/home/ui/home'
import { Test } from '@pages/home/ui/test'
import { SimpleSetting } from '@pages/setting/ui/simple-setting'

export const HomeRoute = {
	path: '/',
	element: <CommonLayout headerType="home" />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'test', element: <Test /> },
		{ path: 'simple-setting', element: <SimpleSetting /> },
	],
	errorElement: <ErrorLayout />,
}
