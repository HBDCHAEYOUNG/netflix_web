import { WithAuth } from '@hooks/with-auth'
import { Outlet } from 'react-router-dom'
import { AdminMenubar } from './admin-menubar'
import { Header } from './header'

function AdminLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-[#f3f3f3]">
			<Header headerType="admin" />
			<AdminMenubar />
			<Outlet />
		</div>
	)
}

export default WithAuth(AdminLayout, 0)
