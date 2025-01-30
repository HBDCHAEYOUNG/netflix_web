import logo from '@images/logo.png'
import { Menu } from '@ui/index'
import PersonIcon from '@icons/person.svg?react'
import { Link } from 'react-router-dom'

export function AdminHeader() {
	const menuItems = [
		{
			title: 'Account',
			icon: <PersonIcon />,
		},
	]
	return (
		<header className="fixed top-0 z-20 flex h-16 w-full items-center bg-Primary/Black px-10 shadow-2xl">
			<Link to="/">
				<img src={logo} alt="logo" className="w-20" />
			</Link>
			<h1 className="pl-60">헤더</h1>
			<Menu label="관리자1" items={menuItems} className="ml-auto" />
		</header>
	)
}
