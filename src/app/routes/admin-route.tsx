import AdminLayout from '@app/layouts/admin-layout'
import ErrorLayout from '@app/layouts/error-layout'
import { Director } from '@pages/admin/ui/director'
import { Genre } from '@pages/admin/ui/genre'
import { Movie } from '@pages/admin/ui/movie'
import { User } from '@pages/admin/ui/user'

export const AdminRoute = {
	path: '/admin',
	element: <AdminLayout />,
	children: [
		{ path: 'movie', element: <Movie /> },
		{ path: 'director', element: <Director /> },
		{ path: 'genre', element: <Genre /> },
		{ path: 'user', element: <User /> },
	],
	errorElement: <ErrorLayout />,
}
