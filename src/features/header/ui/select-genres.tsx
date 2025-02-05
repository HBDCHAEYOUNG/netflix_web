import * as React from 'react'
import { SelectShardcn, SelectContent, SelectItem, SelectTrigger } from '@ui/index'

interface SelectGenresProps {
	label?: string
	items: string[]
	onChange?: (value: string) => void
}

export const SelectGenres = React.forwardRef<HTMLButtonElement, SelectGenresProps>(({ label, items, onChange }, ref) => {
	return (
		<SelectShardcn onValueChange={onChange}>
			<SelectTrigger ref={ref} className="flex h-6 w-24 items-center rounded-none border bg-black">
				<span className="text-left text-xs">{label}</span>
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
})

SelectGenres.displayName = 'SelectGenres'
