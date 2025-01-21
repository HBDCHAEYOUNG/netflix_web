import { cn } from '@lib/utils'
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../_shardcn/navigation-menu'

interface MenuItem {
	icon?: React.ReactNode
	title: string
	image?: string
	href?: string
	description?: string
	onClick?: () => void
	className?: string
}

interface MenuProps {
	label: string
	items: MenuItem[]
	className?: string
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ label, items, className, ...props }, ref) => {
	return (
		<NavigationMenu ref={ref} className={className} {...props}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{label}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid bg-Primary/Black py-2">
							{items.map((item, index) => (
								<li
									key={index}
									className={cn('flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline', item.className)}
									onClick={item.onClick}
								>
									{item.image && <img src={item.image} alt={item.title} className="h-8 w-8 object-cover" />}
									{item.icon && <div className="mr-2 flex h-6 w-6 items-center justify-center">{item.icon}</div>}
									<div>
										{item.title === 'Log out Of Netflix' ? (
											<Link to="/auth/logout" className="text-nowrap text-sm font-medium">
												{item.title}
											</Link>
										) : (
											<div className="text-nowrap text-sm font-medium">{item.title}</div>
										)}
									</div>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
})

Menu.displayName = 'Menu'
