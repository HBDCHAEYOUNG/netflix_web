import CommonLayout from '@app/layouts/common-layout'
import ErrorLayout from '@app/layouts/error-layout'
import Login from '@pages/login/ui/login'

export const AuthRoute = {
	path: '/auth',
	element: <CommonLayout />,
	children: [{ path: 'login', element: <Login /> }],
	errorElement: <ErrorLayout />,
}
