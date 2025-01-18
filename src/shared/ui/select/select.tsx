import * as React from 'react'
import { SelectShardcn, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../_shardcn/select-shardcn'
import { cn } from '@lib/utils'

interface SelectProps {
	type?: 'common' | 'video'
	label?: string
	items: string[]
	value?: string
	onChange?: (value: string) => void
	className?: string
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
	({ type = 'common', label, items, value, onChange, className }, ref) => {
		return (
			<SelectShardcn value={value} onValueChange={onChange} defaultValue={items[0]}>
				<SelectTrigger
					ref={ref}
					className={cn('flex h-14 w-full items-center rounded-md border border-[#808080] px-3 !text-Grey/Grey-50', className)}
				>
					{value ? (
						<div className={cn('flex w-full flex-col', type === 'video' && 'hidden')}>
							<span className="text-left text-xs">{label}</span>
							<SelectValue placeholder={value} />
						</div>
					) : (
						<span className="text-left text-xs">{label}</span>
					)}
					{type === 'video' && <SelectValue placeholder={value} />}
				</SelectTrigger>

				<SelectContent>
					{items.map((item) => (
						<SelectItem key={item} value={item} className="cursor-pointer">
							{item}
						</SelectItem>
					))}
				</SelectContent>
			</SelectShardcn>
		)
	},
)

Select.displayName = 'Select'
