import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import { cn } from '@lib/utils'

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
	label: string
	id: string
	description?: string
}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
	({ className, label, id, description, ...props }, ref) => (
		<div className="flex items-center">
			<label htmlFor={id} className="w-full Regular-Headline">
				{label}
				{description && <span className="block text-Grey/Grey-200 Regular-Body">{description}</span>}
			</label>
			<SwitchPrimitives.Root
				id={id}
				className={cn(
					'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-Secondary/Blue-200 data-[state=unchecked]:bg-Grey/Grey-200',
					className,
				)}
				{...props}
				ref={ref}
			>
				<SwitchPrimitives.Thumb
					className={cn(
						'pointer-events-none block h-5 w-5 rounded-full bg-Primary/Black shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
					)}
				/>
			</SwitchPrimitives.Root>
		</div>
	),
)
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
