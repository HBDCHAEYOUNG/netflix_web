import Home from '../../pages/home/ui/home'
import Login from '../../pages/login/ui/login'
import CommonLayout from '../layouts/common-layout'
import ErrorLayout from '../layouts/error-layout'

export const HomeRoute = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'auth', element: <Login /> },
	],
	errorElement: <ErrorLayout />,
}
