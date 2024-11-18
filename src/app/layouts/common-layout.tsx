import { Outlet } from 'react-router-dom'

function CommonLayout() {
	return (
		<div className="bg-primary/black min-h-screen">
			안녕
			<Outlet />
		</div>
	)
}

export default CommonLayout
