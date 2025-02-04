import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'

export type HeaderType = 'home' | 'landing' | 'auth' | 'none'

export const menuItems = [
	{
		title: 'Manage Your Profile',
		icon: <PencilIcon />,
		to: '#',
	},
	{
		title: 'Account',
		icon: <PersonIcon />,
		to: '#',
	},
	{ title: 'Customer Service Center', icon: <ServiceIcon />, to: '#' },
	{ title: 'Log out Of Netflix', className: 'mt-2 justify-center border-t border-Grey/Grey-200 pr-0', to: '/auth/logout' },
]
