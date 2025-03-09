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
import { usePostProfileAccess } from 'src/shared/models/user.model'

interface AccountMenuProps {
	label: string
	className?: string
}

export const AccountMenu = React.forwardRef<HTMLDivElement, AccountMenuProps>(({ label, className, ...props }, ref) => {
	const menuItems = label === 'admin' ? adminMenuItems : userMenuItems

	const { data } = useFetchAuth()
	const { mutateAsync: postProfileAccess } = usePostProfileAccess()

	const handleProfileClick = async (id: string) => {
		try {
			await postProfileAccess({ profileId: id, id: data?.id })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<NavigationMenu ref={ref} className={className} {...props}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>
						{label === 'admin' && 'admin'}

						{label === 'user' && data?.me && <img src={data?.me.avatar} alt={data?.me.name} className="h-8 w-8 rounded-sm object-cover" />}
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid bg-Primary/Black py-2">
							{label === 'user' &&
								data?.me &&
								data?.profiles
									?.filter((profile) => profile.id !== data?.me.id)
									.map((profile, index) => (
										<li
											key={index}
											className="flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline"
											onClick={() => handleProfileClick(profile.id)}
										>
											<img src={profile.avatar} alt={profile.name} className="mr-3 h-8 w-8 object-cover" />
											<p className="text-nowrap text-sm font-medium">{profile.name}</p>
										</li>
									))}

							{menuItems.map((item, index) => (
								<Link to={item.to} key={`menu-${index}`}>
									<li className={cn('flex cursor-pointer items-center px-4 py-2 pr-12 hover:underline', item.className)}>
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
