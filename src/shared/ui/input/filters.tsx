import Search from '@icons/search.svg?react'
import { cn } from '@lib/utils'
import { ColumnFiltersState } from '@tanstack/react-table'

interface FiltersProps {
	className?: string
	setColumnFilters: React.Dispatch<React.SetStateAction<ColumnFiltersState>>
	currentMenu: string
}

export function Filters({ className, setColumnFilters, currentMenu }: FiltersProps) {
	const onFilterChange = (id: string, value: string) => {
		setColumnFilters([{ id, value }])
	}

	return (
		<div className={cn('flex w-fit items-center gap-3 rounded-sm border border-Grey/Grey-20 bg-Primary/White px-3 py-1', className)}>
			<Search className="h-4 w-4 [&_*]:stroke-Primary/Black" />
			<input
				type="text"
				placeholder={currentMenu === 'movie' ? 'title...' : currentMenu === 'director' ? 'name...' : 'genre...'}
				onChange={(e) => onFilterChange('title', e.target.value)}
				className="focus-within:outline-Primary/Black.. bg-transparent outline-none"
			/>
		</div>
	)
}
