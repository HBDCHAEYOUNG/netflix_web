import * as React from 'react'
import { SelectShardcn, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../_shardcn/select-shardcn'
import { cn } from '@lib/utils'

interface SelectProps {
	label?: string
	items: string[]
	value?: string
	onChange?: (value: string) => void
	className?: string
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(({ label, items, value, onChange, className }, ref) => {
	return (
		<SelectShardcn value={value} onValueChange={onChange} defaultValue={items[0]}>
			<SelectTrigger
				ref={ref}
				className={cn('flex h-14 w-full items-center rounded-md border border-[#808080] px-3 !text-Grey/Grey-50', className)}
			>
				{value ? (
					<div className="flex w-full flex-col">
						<span className="text-left text-xs">{label}</span>
						<SelectValue placeholder={value} />
					</div>
				) : (
					<SelectValue placeholder={label} />
				)}
			</SelectTrigger>
			<SelectContent>
				{items.map((item) => (
					<SelectItem key={item} value={item}>
						{item}
					</SelectItem>
				))}
			</SelectContent>
		</SelectShardcn>
	)
})

Select.displayName = 'Select'
