import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Home from '@pages/home/ui/home'
import Login from '@pages/login/ui/login'
import { ManagerProfiles, Profiles } from '@pages/profile'

export const HomeRoute = {
	path: '/',
	element: <CommonLayout />,
	children: [
		{ index: true, element: <Home /> },
		{ path: 'login', element: <Login /> },
		{ path: 'profiles', element: <Profiles /> },
		{ path: 'manager-profiles', element: <ManagerProfiles /> },
	],
	errorElement: <ErrorLayout />,
}
