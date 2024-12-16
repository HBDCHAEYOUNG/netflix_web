import { Outlet } from 'react-router-dom'
import Footer from './footer'
import { Header } from './header'

export type HeaderType = 'home' | 'landing' | 'auth' | 'none'

interface CommonLayoutProps {
	headerType: HeaderType
}

function CommonLayout({ headerType }: CommonLayoutProps) {
	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base">
			<Header headerType={headerType} />
			<Outlet />
			<Footer />
		</div>
	)
}

export default CommonLayout
