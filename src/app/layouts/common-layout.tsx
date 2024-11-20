import { Outlet } from 'react-router-dom'

function CommonLayout() {
	return (
		<div className="min-h-screen bg-Primary/Black">
			안녕
			<Outlet />
		</div>
	)
}

export default CommonLayout
