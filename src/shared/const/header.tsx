import TransferIcon from '@icons/account.svg?react'
import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'
import post from '@images/post.png'

export type HeaderType = 'home' | 'landing' | 'auth' | 'none'

export const headerItems = [
	{ title: 'home', path: '/' },
	{ title: 'seiries', path: '/tv' },
	{ title: 'movie', path: '/movies' },
	{ title: 'New!The latest tranding content', path: 'latest' },
	{ title: 'My List', path: 'my-list' },
]

export const menuBellItems = [
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
	{ image: post, title: 'New Content', description: 'Watch The Garfield Movie | Netflix', at: '2024-12-10T07:10:27.951Z' },
]

export const menuItems = [
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
	{ title: 'Log out Of Netflix', className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-0' },
]
