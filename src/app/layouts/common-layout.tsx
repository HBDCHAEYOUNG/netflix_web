import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer'
import { Header } from './header'
import { HeaderType } from 'src/shared/const'
import ScrollToTop from '@lib/scroll-to-top'
import { SubHeader } from './sub-header'

interface CommonLayoutProps {
	headerType: HeaderType
	footerType?: 'home' | 'landing' | 'none'
}

function CommonLayout({ headerType, footerType }: CommonLayoutProps) {
	const { pathname } = useLocation()
	const path = pathname.slice(1)
	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base [&_*]:text-white">
			<ScrollToTop />
			<Header headerType={headerType} />
			{(path === 'series' || path === 'movie') && <SubHeader path={path} />}
			<Outlet />
			<Footer footerType={footerType} />
		</div>
	)
}

export default CommonLayout
