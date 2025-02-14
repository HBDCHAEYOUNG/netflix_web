import { cn } from '@lib/utils'
import { Link, useLocation } from 'react-router-dom'

export const menuItems = [
	{ title: 'home', path: '/' },
	// { title: 'seiries', path: '/series' },
	{ title: 'movie', path: '/movie' },
	// { title: 'New!The latest tranding content', path: '/trend' },
	{ title: 'My List', path: '/my-list' },
]

export function NavigationMenu() {
	const { pathname } = useLocation()
	return (
		<div className="ml-12 mr-auto">
			{menuItems.map((item, index) => (
				<Link
					to={item.path}
					key={index}
					className={cn(
						'min-w-max cursor-pointer pr-6 text-Grey/Grey-20 transition-colors duration-300 Regular-Body hover:text-Grey/Grey-50',
						pathname === item.path && 'cursor-default text-Primary/White hover:text-Primary/White',
					)}
				>
					{item.title}
				</Link>
			))}
		</div>
	)
}
