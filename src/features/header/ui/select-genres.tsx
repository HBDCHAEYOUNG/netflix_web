import * as React from 'react'
import { SelectShardcn, SelectContent, SelectItem, SelectTrigger } from '@ui/index'
import { useNavigate } from 'react-router-dom'

interface SelectGenresProps {
	label?: string
	items: string[]
	onChange?: (value: string) => void
}

export const SelectGenres = React.forwardRef<HTMLButtonElement, SelectGenresProps>(({ label, items }, ref) => {
	const navigate = useNavigate()

	const handleGenreSelect = (selectedGenre: string) => {
		navigate(`?genre=${selectedGenre}`)
	}

	return (
		<SelectShardcn onValueChange={handleGenreSelect}>
			<SelectTrigger ref={ref} className="flex h-6 w-24 items-center rounded-none border bg-black">
				<span className="text-left text-xs">{label}</span>
			</SelectTrigger>

			<SelectContent className="rounded-none bg-black">
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
