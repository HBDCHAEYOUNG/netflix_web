import { Outlet } from 'react-router-dom'

function CommonLayout() {
	return (
		<div>
			안녕
			<Outlet />
		</div>
	)
}

export default CommonLayout
