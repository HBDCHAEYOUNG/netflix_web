import NetflixLogo from '@images/Wordmark.png'
import Button from '@ui/button/button'
import { Outlet } from 'react-router-dom'
function CommonLayout() {
	return (
		<div className="min-h-screen w-full bg-Primary/Black">
			<header className="fixed left-0 top-0 z-10 mx-auto flex w-full items-center justify-between px-12 py-6 max-width-desktop">
				<img src={NetflixLogo} alt="netflix" />
				<Button className="h-[32px] w-[77px]">Sign In</Button>
			</header>
			<Outlet />
		</div>
	)
}

export default CommonLayout
