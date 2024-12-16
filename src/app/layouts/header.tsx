import TransferIcon from '@icons/account.svg?react'
import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'
import SearchIcon from '@icons/search.svg?react'
import netflixLogo from '@images/logo.png'
import post from '@images/post.png'
import { cn } from '@lib/utils'
import { AuthStore } from '@store/auth-store'
import Button from '@ui/button/button'
import { Menu, MenuBell } from '@ui/index'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderType } from './common-layout'

interface HeaderProps {
	headerType?: HeaderType
}

const headerItems = [
	{ title: 'home', path: '/' },
	{ title: 'seiries', path: '/tv' },
	{ title: 'movie', path: '/movies' },
	{ title: 'New!The latest tranding content', path: 'latest' },
	{ title: 'My List', path: 'my-list' },
]

const menuBellItems = [
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
]

export function Header({ headerType = 'landing' }: HeaderProps) {
	const { setLogin, setLogout } = AuthStore()
	const isLogin = true

	const menuItems = [
		{
			icon: <PencilIcon />,
			title: 'Manage Your Profile',
		},
		{
			icon: <TransferIcon />,
			title: 'Profile Transfer',
		},
		{
			title: 'Account',
			icon: <PersonIcon />,
		},
		{ title: 'Customer Service Center', icon: <ServiceIcon /> },
		{ title: 'Log out Of Netflix', onClick: setLogout, className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-0' },
	]

	const [isSearch, setIsSearch] = useState(false)

	const inputRef = useRef<HTMLInputElement>(null)
	console.log(isSearch, inputRef)
	return (
		<header
			className={cn(
				'fixed left-1/2 z-10 flex w-full -translate-x-1/2 flex-col items-center justify-between py-6 max-w-base',
				headerType === 'landing' && 'absolute left-1/2 top-0 -translate-x-1/2 translate-y-0',
			)}
		>
			<div className="flex w-full justify-between px-5">
				<Link to="/">
					<img src={netflixLogo} alt="netflix" className="cursor-pointer" />
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
