import * as MenubarPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import Plus from '@icons/plus-thin.svg?react'
import { cn } from '@lib/utils'

const Menubar = MenubarPrimitive.Root

const MenubarItem = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>
>(({ className, ...props }, ref) => <MenubarPrimitive.Item ref={ref} className={cn('Regular-Body', className)} {...props} />)
MenubarItem.displayName = 'MenubarItem'

const MenubarTrigger = React.forwardRef<
	React.ElementRef<typeof MenubarPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> & { showPlus?: boolean }
>(({ className, children, showPlus = true, ...props }, ref) => (
	<MenubarPrimitive.Header className="flex">
		<MenubarPrimitive.Trigger
			ref={ref}
			className={cn(
				'm-1 flex h-10 flex-1 items-center rounded-md px-8 text-Primary/Black transition-all duration-700 hover:bg-TransparentBlack/30% [&[data-state=open]>svg[data-icon="plus"]]:rotate-45',
				className,
			)}
			{...props}
		>
			{children}

			{showPlus && (
				<Plus data-icon="plus" className="ml-auto h-5 w-5 shrink-0 transition-transform duration-200 [&>path]:stroke-Primary/Black" />
			)}
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
		className="data-[state=closed]:animate-Menubar-up data-[state=open]:animate-Menubar-down overflow-hidden bg-[#f7f7f7] pb-1 transition-all"
		{...props}
	>
		<div
			className={cn(
				'mx-1 flex h-10 cursor-pointer items-center rounded-md px-[68px] text-Primary/Black Regular-Body hover:bg-TransparentBlack/30%',
				className,
			)}
		>
			{children}
		</div>
	</MenubarPrimitive.Content>
))

MenubarContent.displayName = MenubarPrimitive.Content.displayName

export { Menubar, MenubarContent, MenubarItem, MenubarTrigger }
