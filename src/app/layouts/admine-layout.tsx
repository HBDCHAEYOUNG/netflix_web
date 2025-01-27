import { Outlet } from 'react-router-dom'
import { AdmineHeader } from './admine-header'

function AdmineLayout() {
	return (
		<div className="min-h-screen bg-Grey/Grey-20 [&>*]:text-Primary/Black">
			<AdmineHeader />
			<Outlet />
		</div>
	)
}

export default AdmineLayout
