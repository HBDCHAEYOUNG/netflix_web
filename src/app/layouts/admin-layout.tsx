import { Outlet } from 'react-router-dom'
import { AdminMenubar } from './admin-menubar'
import { AdminHeader } from './admin-header'

function AdminLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-[#f3f3f3]">
			<AdminHeader />
			<AdminMenubar />
			<Outlet />
		</div>
	)
}

export default AdminLayout
