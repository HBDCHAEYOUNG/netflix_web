import AdminLayout from '@app/layouts/admin-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { Admin } from '@pages/admine'

export const AdminRoute = {
	path: '/admin',
	element: <AdminLayout />,
	children: [{ index: true, element: <Admin /> }],
	errorElement: <ErrorLayout />,
}
