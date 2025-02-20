import { Checkbox } from '@ui/_shardcn/checkbox'
import { HTMLAttributes, useId } from 'react'
import { cn } from '@lib/utils'

interface CheckboxBasicProps extends HTMLAttributes<HTMLDivElement> {
	label: string
	labelClassName?: string
	size?: string
	className?: string
}

export function CheckboxBasic({ label, size, labelClassName, className, ...rest }: CheckboxBasicProps) {
	const id = useId()
	return (
		<div className={cn('flex items-center space-x-2', className)} {...rest}>
			<Checkbox id={id} className={cn('', size)} />
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
}
