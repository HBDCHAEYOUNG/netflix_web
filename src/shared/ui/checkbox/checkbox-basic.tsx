import { Checkbox } from '@ui/_shardcn/checkbox'
import { CheckboxBasicProps } from './checkbos.types'
import { useId } from 'react'
import { cn } from '@lib/utils'

export function CheckboxBasic({ label, labelClassName, ...rest }: CheckboxBasicProps) {
	const id = useId()
	return (
		<div className="flex items-center space-x-2" {...rest}>
			<Checkbox id={id} />
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
