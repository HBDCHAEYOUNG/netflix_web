import { NavigationMenu, SearchTap } from '@features/header'
import { AccountMenu } from '@features/header/ui/account-menu'
import netflixLogo from '@images/logo.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HeaderType } from 'src/shared/const'
import { useFetchAuth } from 'src/shared/models/auth.model'

interface HeaderProps {
	headerType?: HeaderType
}

export function Header({ headerType = 'landing' }: HeaderProps) {
	const { data, isLoading } = useFetchAuth()
	const { isLogin, setLogout } = AuthStore()
	const { pathname } = useLocation()
	const path = pathname.slice(1)

	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 0
			setScrolled(isScrolled)
		}

		if (!isLoading && !data && isLogin) {
			setLogout()
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [isLoading, data, isLogin])

	return (
		<header
			className={cn(
				'fixed top-0 z-50 flex h-[68px] w-full items-center justify-between',
				headerType === 'admin' && 'bg-Primary/Black px-10 text-Primary/White',
				headerType === 'home' &&
					'z-50 items-center bg-gradient-to-b from-Primary/Black to-transparent transition-colors duration-500 common-padding',
				scrolled && 'bg-Primary/Black',
				(headerType === 'landing' || headerType === 'auth') &&
					'absolute left-1/2 top-0 -translate-x-1/2 translate-y-0 bg-transparent !px-0 max-w-base',
				headerType === 'none' && 'hidden',
				(path === 'series' || path === 'genre') && 'bg-Primary/Black',
			)}
		>
			<div className="z-30 flex items-center">
				<Link to={isLogin ? '/' : '/landing'}>
					<img src={netflixLogo} alt="netflix" className="w-24 cursor-pointer" />
				</Link>
				<h1 className={cn(headerType === 'admin' ? 'ml-3 border-l pl-3 text-xl font-light' : 'hidden')}>Admin</h1>
			</div>

			{isLogin ? (
				<nav
					className={cn(
						'hidden',
						headerType === 'admin' && 'flex',
						headerType === 'home' && 'flex w-full items-center gap-6',
					)}
				>
					{headerType === 'home' && (
						<div className="flex w-full items-center gap-6">
							<NavigationMenu />
							<SearchTap />
							{/* <Notifications > */}
						</div>
					)}
					<AccountMenu label={headerType === 'admin' ? 'admin' : 'user'} />
				</nav>
			) : (
				<Link to="/auth/login" className={cn(headerType === 'auth' && 'hidden')}>
					<Button className="h-[32px] w-[77px] Regular-Body">Login</Button>
				</Link>
			)}
		</header>
	)
}
