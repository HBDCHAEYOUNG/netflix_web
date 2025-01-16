import { Outlet } from 'react-router-dom'
import Footer from './footer'
import { Header } from './header'
import { HeaderType } from 'src/shared/const'

interface CommonLayoutProps {
	headerType: HeaderType
	footerType?: 'home' | 'landing' | 'none'
}

function CommonLayout({ headerType, footerType }: CommonLayoutProps) {
	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base">
			<Header headerType={headerType} />
			<Outlet />
			<Footer footerType={footerType} />
		</div>
	)
}

export default CommonLayout
