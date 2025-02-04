import { AccountMenu, NavigationMenu, Notifications, SearchTap } from '@features/header'
import netflixLogo from '@images/logo.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminMenuItems, HeaderType, userMenuItems } from 'src/shared/const'

interface HeaderProps {
	headerType?: HeaderType
}

export function Header({ headerType = 'landing' }: HeaderProps) {
	const { isLogin, setLogin } = AuthStore()

	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<header
			className={cn(
				'fixed flex h-16 w-full items-center justify-between',
				headerType === 'admin'
					? 'top-0 z-20 bg-Primary/Black px-10'
					: 'z-10 items-center bg-gradient-to-b from-Primary/Black to-transparent transition-colors duration-300 common-padding',
				scrolled && 'bg-Primary/Black',
				(headerType === 'landing' || headerType === 'auth') &&
					'absolute left-1/2 top-0 -translate-x-1/2 translate-y-0 bg-transparent !px-0 max-w-base',
				headerType === 'none' && 'hidden',
			)}
		>
			<div className="flex items-center">
				<Link to={isLogin ? '/' : '/landing'}>
					<img src={netflixLogo} alt="netflix" className="w-24 cursor-pointer" />
				</Link>
				<h1 className={cn(headerType === 'admin' ? 'ml-3 border-l pl-3 text-xl font-light' : 'hidden')}>Admin</h1>
			</div>

			{isLogin ? (
				<nav className={cn(headerType === 'home' && 'flex w-full items-center gap-6')}>
					{headerType === 'home' && (
						<div className="flex w-full items-center gap-6">
							<NavigationMenu />

							<SearchTap />
							<Notifications />
						</div>
					)}
					<AccountMenu
						label={headerType === 'admin' ? 'Admin' : 'Profile'}
						items={headerType === 'admin' ? adminMenuItems : userMenuItems}
					/>
				</nav>
			) : (
				<Link to="/auth/login" className={cn(headerType === 'auth' && 'hidden')}>
					<Button className="h-[32px] w-[77px] Regular-Body" onClick={setLogin}>
						Login
					</Button>
				</Link>
			)}
		</header>
	)
}
