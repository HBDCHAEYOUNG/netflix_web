import * as React from 'react'
import { SelectShardcn, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../_shardcn/select-shardcn'
import { cn } from '@lib/utils'

interface SelectProps {
	type?: 'common' | 'admin'
	label?: string
	items: string[]
	value?: string
	onChange?: (value: string) => void
	className?: string
	contentClassName?: string
	itemClassName?: string
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
	({ type = 'common', label, items, value, onChange, className, contentClassName, itemClassName }, ref) => {
		return (
			<SelectShardcn value={value} onValueChange={onChange} defaultValue={items[0]}>
				<SelectTrigger
					ref={ref}
					className={cn('flex h-14 w-full items-center rounded-md border border-[#808080] px-3 !text-Grey/Grey-50', className)}
				>
					{value && type === 'common' ? (
						<div className={cn('flex w-full flex-col')}>
							<span className="text-left text-xs"> {label}</span>
							<SelectValue placeholder={value} />
						</div>
					) : (
						<span className="text-left text-xs">{label}</span>
					)}
					{type === 'admin' && <SelectValue placeholder={value} />}
				</SelectTrigger>

				<SelectContent className={cn(contentClassName)}>
					{items.map((item) => (
						<SelectItem key={item} value={item} className={cn('cursor-pointer', itemClassName)}>
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</SelectShardcn>
		)
	},
)

Select.displayName = 'Select'
