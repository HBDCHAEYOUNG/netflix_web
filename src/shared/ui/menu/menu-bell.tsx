import * as React from 'react'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../_shardcn/navigation-menu'
import { cn } from '@lib/utils'
import BellIcon from '@icons/notification.svg?react'
import { format } from 'timeago.js'

interface MenuItem {
	icon?: React.ReactNode
	title: string
	image: string
	href?: string
	description: string
	className?: string
	at: string
}

interface MenuProps {
	items: MenuItem[]
	className?: string
}

export const MenuBell = React.forwardRef<HTMLDivElement, MenuProps>(({ items, className, ...props }, ref) => {
	return (
		<NavigationMenu ref={ref} className={className} {...props}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger asChild={true}>
						<BellIcon />
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[410px] bg-Primary/Black py-2">
							{items.map((item, index) => (
								<li
									key={index}
									className={cn(
										'flex cursor-pointer items-center gap-2 border-b border-Grey/Grey-200 px-4 py-4 last:border-b-0 hover:brightness-90',
										item.className,
									)}
								>
									<img src={item.image} alt={item.title} className="basis-3/10 mb-auto w-[110px] rounded-md object-cover" />

									<div className="basis-7/10">
										<h1 className="Regular-Body">{item.title}</h1>
										<p className="Regular-Body">{item.description}</p>
										<p className="text-Grey/Grey-200 Regular-Smallbody">{format(item.at, 'ko')}</p>
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

MenuBell.displayName = 'MenuBell'
