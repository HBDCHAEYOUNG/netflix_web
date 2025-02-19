import { cn } from '@lib/utils'
import * as React from 'react'
import { Link } from 'react-router-dom'
import { adminMenuItems, userMenuItems } from 'src/shared/const/header'
import { useFetchAuth } from 'src/shared/models/auth.model'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '../../../shared/ui/_shardcn/navigation-menu'

interface AccountMenuProps {
	label: string
	className?: string
}

export const AccountMenu = React.forwardRef<HTMLDivElement, AccountMenuProps>(({ label, className, ...props }, ref) => {
	const { data } = useFetchAuth()
	const menuItems = label === 'admin' ? adminMenuItems : userMenuItems

	return (
		<NavigationMenu ref={ref} className={className} {...props}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						{label === 'admin' && 'admin'}
						{label === 'user' && (
							<img src={data?.profiles[0]?.avatar} alt={data?.profiles[0]?.name} className="h-8 w-8 rounded-sm object-cover" />
						)}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid bg-Primary/Black py-2">
							{label === 'user' &&
								data?.profiles?.map((profile, index) => (
									<Link to={`/profile/${profile.id}`}>
										<li key={`profile-${index}`} className="flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline">
											<img src={profile.avatar} alt={profile.name} className="mr-3 h-8 w-8 object-cover" />
											<p className="text-nowrap text-sm font-medium">{profile.name}</p>
										</li>
									</Link>
								))}

							{menuItems.map((item, index) => (
								<Link to={item.to}>
									<li
										key={`menu-${index}`}
										className={cn('flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline', item.className)}
									>
										{item.icon && <div className="mr-3 flex h-8 w-8 items-center justify-center">{item.icon}</div>}
										<p className="text-nowrap text-sm font-medium">{item.title}</p>
									</li>
								</Link>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
})

AccountMenu.displayName = 'AccountMenu'
