import Button from '@ui/button/button'
import { Link } from 'react-router-dom'
import netflixLogo from '@images/logo.png'
import { AuthStore } from '@store/auth-store'
import { Menu, MenuBell } from '@ui/index'
import PencilIcon from '@icons/pencil.svg?react'
import TransferIcon from '@icons/account.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'
import post from '@images/post.png'

export function Header() {
	const { isLogin, setLogin, setLogout } = AuthStore()

	console.log(new Date().toISOString())
	return (
		<header className="fixed left-1/2 z-10 flex w-full -translate-x-1/2 items-center justify-between py-6 max-width-desktop">
			<Link to="/">
				<img src={netflixLogo} alt="netflix" className="cursor-pointer" />
			</Link>

			{isLogin ? (
				<div className="flex items-center gap-4">
					<MenuBell
						items={[
							{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
							{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
							{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
						]}
					/>
					<Menu
						label="Profile"
						items={[
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
						]}
					/>
				</div>
			) : (
				<Link to="/auth/login">
					<Button className="h-[32px] w-[77px]" onClick={setLogin}>
						Login
					</Button>
				</Link>
			)}
		</header>
	)
}
