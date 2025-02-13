import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import movie from '../api/movie'
import { MovieControllerFindAllParamsDto } from '../api/data-contracts'

export const movieQueryKey = createQueryKeys('movie', {
	fetchMovies: (take: number, cursor: string) => [take, cursor],
	fetchMovie: (id: number) => [id],
})

export const useFetchMovies = (take: number, cursor: string) => {
	const query: MovieControllerFindAllParamsDto = {
		order: ['id_DESC'],
		take,
	}

	if (cursor) Object.assign(query, { cursor })

	return useQuery({
		queryKey: movieQueryKey.fetchMovies(take, cursor).queryKey,
		queryFn: () => movie.movieControllerFindAll(query),
	})
}

export const useFetchMovie = (id: number) =>
	useQuery({
		queryKey: movieQueryKey.fetchMovie(id).queryKey,
		queryFn: () => movie.movieControllerFindOne(id),
		enabled: false,
	})

export const usePostMovie = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: any) => {
			const newData = {
				detail: data.detail,
				directorId: Number(data.director),
				genreIds: [Number(data.genre)],
				movieFileName: data.movieFile,
				title: data.title,
			}
			return movie.movieControllerCreate(newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey._def })
		},
	})
}

export const usePatchMovie = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: any }) => {
			const newData = {
				detail: data.detail,
				directorId: Number(data.director),
				genreIds: [Number(data.genre)],
				movieFileName: data.movieFile,
				title: data.title,
			}
			return movie.movieControllerUpdate(id, newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey._def })
		},
	})
}

export const useDeleteMovie = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => movie.movieControllerRemove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey._def })
		},
	})
}
