import { Checkbox } from '@ui/_shardcn/checkbox'
import { HTMLAttributes, useId } from 'react'
import { cn } from '@lib/utils'
import React from 'react'

interface CheckboxBasicProps extends HTMLAttributes<HTMLDivElement> {
	label: string
	labelClassName?: string
	size?: string
	className?: string
}

const CheckboxBasic = React.forwardRef<HTMLButtonElement, CheckboxBasicProps>(
	({ label, size, labelClassName, className, ...rest }, ref) => {
		const id = useId()
		return (
			<div className={cn('flex items-center space-x-2', className)} {...rest}>
				<Checkbox ref={ref} id={id} className={cn('', size)} />
				<div className="grid gap-1.5 leading-none">
					<label
						htmlFor={id}
						className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', labelClassName)}
					>
						{label}
					</label>
				</div>
			</div>
		)
	},
)

CheckboxBasic.displayName = 'CheckboxBasic'

export { CheckboxBasic }
