import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'

export type HeaderType = 'home' | 'landing' | 'auth' | 'none' | 'admin'

export const userMenuItems = [
	{
		title: 'Manage Your Profile',
		icon: <PencilIcon />,
		to: '/profiles',
	},
	{
		title: 'Account',
		icon: <PersonIcon />,
		to: '#',
	},
	{ title: 'Customer Service Center', icon: <ServiceIcon />, to: '#' },
	{ title: 'Log out Of Netflix', className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-0', to: '/auth/logout' },
]

export const adminMenuItems = [
	{ title: 'Log out Of Admin', className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-3', to: '/auth/logout' },
]
