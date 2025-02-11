import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import genre from '../api/genre'
import { CreateGenreDtoDto } from '../api'

export const genreQueryKey = createQueryKeys('genre')

export const useFetchGenres = () =>
	useQuery({
		queryKey: genreQueryKey._def,
		queryFn: () => genre.genreControllerFindAll(),
	})

export const usePostGenre = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: CreateGenreDtoDto) => genre.genreControllerCreate(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: genreQueryKey._def })
		},
	})
}
