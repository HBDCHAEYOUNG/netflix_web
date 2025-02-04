import { cn } from '@lib/utils'
import * as React from 'react'
import { Link } from 'react-router-dom'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../../../shared/ui/_shardcn/navigation-menu'

interface AccountMenuItems {
	icon?: React.ReactNode
	title: string
	image?: string
	className?: string
	to: string
}

interface AccountMenuProps {
	label: string
	items: AccountMenuItems[]
	className?: string
}

export const AccountMenu = React.forwardRef<HTMLDivElement, AccountMenuProps>(({ label, items, className, ...props }, ref) => {
	return (
		<NavigationMenu ref={ref} className={className} {...props}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{label}</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid bg-Primary/Black py-2">
							{items.map((item, index) => (
								<li key={index} className={cn('flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline', item.className)}>
									{item.image && <img src={item.image} alt={item.title} className="h-8 w-8 object-cover" />}
									{item.icon && <div className="mr-2 flex h-6 w-6 items-center justify-center">{item.icon}</div>}

									<Link to={item.to} className="text-nowrap text-sm font-medium">
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
})

AccountMenu.displayName = 'AccountMenu'
