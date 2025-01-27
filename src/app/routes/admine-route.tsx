import AdmineLayout from '@app/layouts/admine-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { Admine } from '@pages/admine'

export const AdmineRoute = {
	path: '/admine',
	element: <AdmineLayout />,
	children: [{ index: true, element: <Admine /> }],
	errorElement: <ErrorLayout />,
}
