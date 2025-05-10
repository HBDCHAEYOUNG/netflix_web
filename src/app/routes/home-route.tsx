import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import MyList from '@pages/home/ui/my-list'
import Home from '@pages/home/ui/home'
import { Test } from '@pages/home/ui/test'
import Search from '@pages/search/ui/search'
import { HomeGenre } from '@pages/home/ui/home-genre'
export const HomeRoute = {
	path: '/',
	element: <CommonLayout headerType="home" />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'test', element: <Test /> },
		{ path: 'search', element: <Search /> },
		{ path: 'genre', element: <HomeGenre /> },
		{ path: 'my-list', element: <MyList /> },
	],
	errorElement: <ErrorLayout />,
}
