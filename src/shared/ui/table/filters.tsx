import Search from '@icons/search.svg?react'
import { cn } from '@lib/utils'
import { ColumnFiltersState } from '@tanstack/react-table'

interface FiltersProps {
	className?: string
	columnFilters: ColumnFiltersState
	setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
}

export function Filters({ className, columnFilters, setColumnFilters }: FiltersProps) {
	const taskName = columnFilters.find((f) => f.id === 'title')?.value ?? ''

	const onFilterChange = (id: string, value: string) => {
		setColumnFilters([{ id, value }])
	}
	return (
		<div className={cn('flex w-fit items-center gap-3 rounded-sm border border-Grey/Grey-20 bg-Primary/White px-3 py-1', className)}>
			<Search className="h-4 w-4 [&_*]:stroke-Primary/Black" />
			<input
				type="text"
				value={taskName}
				onChange={(e) => onFilterChange('title', e.target.value)}
				className="focus-within:outline-Primary/Black.. bg-transparent outline-none"
			/>
		</div>
	)
}
