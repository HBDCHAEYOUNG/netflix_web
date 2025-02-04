import { AccountMenu } from '@features/header'
import PersonIcon from '@icons/person.svg?react'
import logo from '@images/logo.png'
import { Link } from 'react-router-dom'

export function AdminHeader() {
	const menuItems = [
		{
			title: 'Account',
			icon: <PersonIcon />,
			to: '#',
		},
	]
	return (
		<header className="fixed top-0 z-20 flex h-16 w-full items-center bg-Primary/Black px-10 shadow-2xl">
			<Link to="/">
				<img src={logo} alt="logo" className="w-24" />
			</Link>
			<div className="flex items-center pl-3 text-3xl font-thin">
				|<h1 className="pl-3 text-xl font-light">Admin</h1>
			</div>
			{/* <h1 className="pl-60">헤더</h1> */}
			<AccountMenu label="admin1" items={menuItems} className="ml-auto" />
		</header>
	)
}
