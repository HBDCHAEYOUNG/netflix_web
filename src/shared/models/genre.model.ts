import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import genre from '../api/genre'
import { CreateGenreDtoDto, UpdateGenreDtoDto } from '../api/data-contracts'

export const genreQueryKey = createQueryKeys('genre', {
	fetchGenres: (page: number, take: number) => [page, take],
	fetchGenre: (id: number) => [id],
})

export const useFetchGenres = (page: number, take: number) =>
	useQuery({
		queryKey: genreQueryKey.fetchGenres(page, take).queryKey,
		queryFn: () => genre.genreControllerFindAll({ page, take }),
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

export const useFetchGenre = (id: number) => {
	return useQuery({
		queryKey: genreQueryKey.fetchGenre(id).queryKey,
		queryFn: () => genre.genreControllerFindOne(id),
	})
}

export const usePatchGenre = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: UpdateGenreDtoDto }) => {
			const newData = {
				name: data.name,
			}
			return genre.genreControllerUpdate(id, newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: genreQueryKey._def })
		},
	})
}

export const useDeleteGenre = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => genre.genreControllerRemove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: genreQueryKey._def })
		},
	})
}
