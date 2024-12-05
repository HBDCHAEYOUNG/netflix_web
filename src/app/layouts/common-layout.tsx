import NetflixLogo from '@images/logo.png'
import Button from '@ui/button/button'
import { Outlet } from 'react-router-dom'
function CommonLayout() {
	return (
		<div className="min-h-screen w-full bg-Primary/Black">
			<header className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 items-center justify-between px-12 py-6 max-width-desktop">
				<img src={NetflixLogo} alt="netflix" />
				<Button className="h-[32px] w-[77px]">Sign In</Button>
			</header>
			<Outlet />
		</div>
	)
}

export default CommonLayout
