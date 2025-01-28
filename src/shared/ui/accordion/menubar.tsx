import * as MenubarPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import Plus from '@icons/plus-thin.svg?react'
import { cn } from '@lib/utils'

const Menubar = MenubarPrimitive.Root

const MenubarItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>(({ className, ...props }, ref) => <MenubarPrimitive.Item ref={ref} className={cn('Regular-Headline', className)} {...props} />)
MenubarItem.displayName = 'MenubarItem'

const MenubarTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<MenubarPrimitive.Header className="flex">
		<MenubarPrimitive.Trigger
			ref={ref}
			className={cn(
				'm-1 flex h-12 flex-1 items-center justify-between rounded-md px-8 text-Primary/Black transition-all hover:bg-TransparentBlack/30% [&[data-state=open]>svg]:rotate-45',
				className,
			)}
			{...props}
		>
			{children}

			<Plus className="h-5 w-5 shrink-0 transition-transform duration-200 [&>path]:stroke-Primary/Black" />
		</MenubarPrimitive.Trigger>
	</MenubarPrimitive.Header>
))
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarContent = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<MenubarPrimitive.Content
		ref={ref}
		className="data-[state=closed]:animate-Menubar-up data-[state=open]:animate-Menubar-down overflow-hidden transition-all"
		{...props}
	>
		<div
			className={cn('m-1 flex h-12 items-center rounded-md px-8 text-Primary/Black Regular-Body hover:bg-TransparentBlack/30%', className)}
		>
			{children}
		</div>
	</MenubarPrimitive.Content>
))

MenubarContent.displayName = MenubarPrimitive.Content.displayName

export { Menubar, MenubarContent, MenubarItem, MenubarTrigger }
