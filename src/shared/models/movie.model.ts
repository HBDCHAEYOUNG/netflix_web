import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import movie from '../api/movie'

export const movieQueryKey = createQueryKeys('movie', {
	fetchMovies: (start: number, perPage: number) => [start, perPage],
	fetchMovie: (id: number) => [id],
})

export const useFetchMovies = (start: number, perPage: number) =>
	useQuery({
		queryKey: movieQueryKey.fetchMovies(start, perPage).queryKey,
		queryFn: () =>
			movie.movieControllerFindAll({
				order: ['id_DESC'],
				take: 5,
			}),
	})

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
