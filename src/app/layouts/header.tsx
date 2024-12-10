import Button from '@ui/button/button'
import { Link } from 'react-router-dom'
import netflixLogo from '@images/logo.png'

export function Header() {
	return (
		<header className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 items-center justify-between py-6 max-width-desktop">
			<Link to="/">
				<img src={netflixLogo} alt="netflix" className="cursor-pointer" />
			</Link>
			<Link to="/auth/login">
				<Button className="h-[32px] w-[77px]">Login</Button>
			</Link>
		</header>
	)
}
