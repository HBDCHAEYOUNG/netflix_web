import { AccountMenu, NavigationMenu, Notifications, SearchTap } from '@features/header'
import netflixLogo from '@images/logo.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderType, menuItems } from 'src/shared/const'

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
				'fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center justify-between bg-gradient-to-b from-Primary/Black to-transparent py-6 transition-colors duration-300 common-padding',
				scrolled && 'bg-Primary/Black',
				(headerType === 'landing' || headerType === 'auth') &&
					'absolute left-1/2 top-0 -translate-x-1/2 translate-y-0 bg-transparent !px-0 max-w-base',
				headerType === 'none' && 'hidden',
			)}
		>
			<div className="flex w-full items-center justify-between">
				<Link to={isLogin ? '/' : '/landing'}>
					<img src={netflixLogo} alt="netflix" className="h-[32px] cursor-pointer" />
				</Link>

				{isLogin ? (
					<div className={cn('ml-12 flex w-full items-center gap-6', headerType === 'auth' && 'hidden')}>
						<NavigationMenu />

						<SearchTap />
						<Notifications />
						<AccountMenu label="Profile" items={menuItems} />
					</div>
				) : (
					<Link to="/auth/login">
						<Button className="h-[32px] w-[77px] Regular-Body" onClick={setLogin}>
							Login
						</Button>
					</Link>
				)}
			</div>
		</header>
	)
}
