import ScrollToTop from '@lib/scroll-to-top'
import { Outlet, useLocation } from 'react-router-dom'
import { HeaderType } from 'src/shared/const'
import Footer from './footer'
import { Header } from './header'
import { SubHeader } from './sub-header'

interface CommonLayoutProps {
	headerType: HeaderType
	footerType?: 'home' | 'landing' | 'none'
	requireAuth?: boolean
}

function CommonLayout({ headerType, footerType }: CommonLayoutProps) {
	const { pathname } = useLocation()
	const path = pathname?.slice(1)
	const isSubHeader = path === 'series' || path === 'genre'

	return (
		<div className="min-h-screen w-full bg-Primary/Black min-w-base [&_*]:text-white">
			<ScrollToTop />
			<Header headerType={headerType} />
			{isSubHeader && <SubHeader path={path} />}
			<Outlet />
			<Footer footerType={footerType} />
		</div>
	)
}

export default CommonLayout
