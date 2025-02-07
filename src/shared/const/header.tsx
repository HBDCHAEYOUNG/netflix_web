import PencilIcon from '@icons/pencil.svg?react'
import PersonIcon from '@icons/person.svg?react'
import ServiceIcon from '@icons/question.svg?react'

export type HeaderType = 'home' | 'landing' | 'auth' | 'none' | 'admin'

export const userMenuItems = [
	{
		title: 'profile2',
		image:
			'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229',
		to: '#',
	},
	{
		title: 'kids',
		image:
			'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABdTeFDWGGsM48NmQvPPwI9VDJ_aeLDk_7U5sowYemKcU_IW57cQR5Vn1fJU8F2tlp9Atv3V13C6rQ4-AT88O_8asZcow4xY.png?r=15b',
		to: '#',
	},
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

export const adminMenuItems = [
	{
		title: 'Account',
		icon: <PersonIcon />,
		to: '#',
	},
]
