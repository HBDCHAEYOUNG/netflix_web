import { SelectContent, SelectItem, SelectShardcn, SelectTrigger } from '@ui/index'
import { useNavigate } from 'react-router-dom'
import { useFetchGenres } from 'src/shared/models/genre.model'

export const SelectGenres = () => {
	const navigate = useNavigate()

	const { data: genres } = useFetchGenres(1, 10)
	console.log(genres)

	const handleGenreSelect = (selectedGenre: string) => {
		navigate(`?genre=${selectedGenre}`)
	}

	return (
		<SelectShardcn onValueChange={handleGenreSelect}>
			<SelectTrigger className="flex h-6 w-24 items-center rounded-none border bg-black">
				<span className="text-left text-xs">Genre</span>
			</SelectTrigger>

			<SelectContent className="rounded-none bg-black text-Primary/White">
				{genres?.data.map((item) => (
					<SelectItem key={item.id} value={item.name} className="cursor-pointer">
						{item.name}
					</SelectItem>
				))}
			</SelectContent>
		</SelectShardcn>
	)
}
