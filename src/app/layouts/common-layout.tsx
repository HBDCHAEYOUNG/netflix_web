import { Outlet } from 'react-router-dom'
import NetflixLogo from '@images/Wordmark.png'
import ButtonBasic from '@ui/button/button-basic'
function CommonLayout() {
	return (
		<div className="min-h-screen bg-Primary/Black">
			<header className="mx-auto flex items-center justify-between px-12 py-6 max-width-desktop">
				<img src={NetflixLogo} alt="netflix" className="z-30" />
				<ButtonBasic className="z-30 h-[32px] w-[77px]">Sign In</ButtonBasic>
			</header>
			<Outlet />
		</div>
	)
}

export default CommonLayout
