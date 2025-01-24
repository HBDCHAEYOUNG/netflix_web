import SearchIcon from '@icons/search.svg?react'
import netflixLogo from '@images/logo.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { Menu, MenuBell } from '@ui/index'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { headerItems, HeaderType, menuBellItems, menuItems } from 'src/shared/const'

interface HeaderProps {
	headerType?: HeaderType
}

export function Header({ headerType = 'landing' }: HeaderProps) {
	const { pathname } = useLocation()

	const { isLogin, setLogin } = AuthStore()

	const [isSearch, setIsSearch] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)

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
						{headerItems.map((item, index) => (
							<Link
								to={item.path}
								key={index}
								className={cn(
									'min-w-max cursor-pointer text-Grey/Grey-20 transition-colors duration-300 Regular-Body hover:text-Grey/Grey-50',
									pathname === item.path && 'cursor-default text-Primary/White hover:text-Primary/White',
								)}
							>
								{item.title}
							</Link>
						))}

						{isSearch ? (
							<input
								ref={inputRef}
								name="search"
								placeholder="Title, people, genres"
								className="ml-auto h-[38px] w-[250px] rounded-none border !border-Primary/White bg-TransparentBlack/30% px-4 text-Primary/White !outline-none"
								onBlur={() => {
									setIsSearch(false)
									inputRef.current?.blur()
								}}
							/>
						) : (
							<SearchIcon
								className="ml-auto cursor-pointer"
								onClick={() => {
									setIsSearch(true)
									setTimeout(() => {
										inputRef.current?.focus()
									}, 100)
								}}
							/>
						)}

						<MenuBell items={menuBellItems} />
						<Menu label="Profile" items={menuItems} />
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
