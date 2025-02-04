import { cn } from '@lib/utils'
import { Link, useLocation } from 'react-router-dom'

export const menuItems = [
	{ title: 'home', path: '/' },
	{ title: 'seiries', path: '/tv' },
	{ title: 'movie', path: '/movies' },
	{ title: 'New!The latest tranding content', path: 'latest' },
	{ title: 'My List', path: 'my-list' },
]

export function NavigationMenu() {
	const { pathname } = useLocation()
	return (
		<div>
			{menuItems.map((item, index) => (
				<Link
					to={item.path}
					key={index}
					className={cn(
						'min-w-max cursor-pointer text-Grey/Grey-20 transition-colors duration-300 Regular-Body hover:text-Grey/Grey-50',
						pathname === item.path && 'cursor-default text-Primary/White hover:text-Primary/White',
					)}
				>
					{item.title}
				</Link>
			))}
		</div>
	)
}
