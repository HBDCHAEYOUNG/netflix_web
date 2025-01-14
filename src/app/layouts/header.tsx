import SearchIcon from '@icons/search.svg?react'
import netflixLogo from '@images/logo.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { Menu, MenuBell } from '@ui/index'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { headerItems, HeaderType, menuBellItems, menuItems } from 'src/shared/const'

interface HeaderProps {
	headerType?: HeaderType
}

export function Header({ headerType = 'landing' }: HeaderProps) {
	const { setLogin } = AuthStore()

	const isLogin = false

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
				'fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center justify-between py-6 transition-colors duration-300 common-padding',
				scrolled && 'bg-Primary/Black',
				(headerType === 'landing' || headerType === 'auth') &&
					'absolute left-1/2 top-0 -translate-x-1/2 translate-y-0 bg-transparent !px-0 max-w-base',
			)}
		>
			<div className="flex w-full items-center justify-between">
				<Link to={isLogin ? '/' : '/landing'}>
					<img src={netflixLogo} alt="netflix" className="h-[32px] cursor-pointer" />
				</Link>

				{isLogin ? (
					<div className="ml-4 flex w-full items-center gap-4">
						{headerItems.map((item, index) => (
							<Link to={item.path} key={index} className="min-w-max Regular-Smallbody">
								{item.title}
							</Link>
						))}

						{isSearch ? (
							<input
								ref={inputRef}
								name="search"
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
						<Button className="h-[32px] w-[77px]" onClick={setLogin}>
							Login
						</Button>
					</Link>
				)}
			</div>
		</header>
	)
}
