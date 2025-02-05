import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { Series } from '@pages/home'
import Home from '@pages/home/ui/home'
import { Test } from '@pages/home/ui/test'
import { Search } from '@pages/search'

export const HomeRoute = {
	path: '/',
	element: <CommonLayout headerType="home" />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'test', element: <Test /> },
		{ path: 'search', element: <Search /> },
		{ path: 'series', element: <Series /> },
	],
	errorElement: <ErrorLayout />,
}
