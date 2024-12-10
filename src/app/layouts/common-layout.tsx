import { Outlet } from 'react-router-dom'
import Footer from './footer'
import { Header } from './header'

function CommonLayout() {
	return (
		<div className="min-h-screen w-full bg-Primary/Black">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default CommonLayout
