import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Login from '@pages/login/ui/login'
import { Logout } from '@pages/logout'
import { SimpleSetting } from '@pages/setting'
import { Signup } from '@pages/signup/ui/signup'

export const AuthRoute = {
	path: '/auth',
	element: <CommonLayout headerType="auth" />,
	children: [
		{ path: 'login', element: <Login /> },
		{ path: 'signup', element: <Signup /> },
		{ path: 'simple-setting', element: <SimpleSetting /> },
		{ path: 'logout', element: <Logout /> },
	],
	errorElement: <ErrorLayout />,
}
