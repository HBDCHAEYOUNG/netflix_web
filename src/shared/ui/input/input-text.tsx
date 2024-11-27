import * as React from 'react'

import { cn } from '@lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, label, ...props }, ref) => {
	return (
		<input
			placeholder={label}
			type={type}
			className={cn(
				'h-12 w-full rounded-md border border-[#808080] bg-Primary/Black px-3 text-Grey/Grey-50 focus:outline-none focus:outline-Primary/White',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})

InputText.displayName = 'InputText'
