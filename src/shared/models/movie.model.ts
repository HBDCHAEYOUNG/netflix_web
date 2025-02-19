import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import movie from '../api/movie'
import { MovieControllerFindAllParamsDto } from '../api/data-contracts'
import wishlist from '../api/wishlist'

export const movieQueryKey = createQueryKeys('movie', {
	fetchMovies: (take: number, cursor: string, title?: string) => [take, cursor, title],
	fetchMovie: (id: number) => [id],
	fetchWishlist: () => ['whislist'],
})

export const useFetchMovies = (take: number, cursor: string, title?: string) => {
	const query: MovieControllerFindAllParamsDto = {
		order: ['id_DESC'],
		take,
		title,
	}

	if (cursor) Object.assign(query, { cursor })
	if (title) Object.assign(query, { title })
	return useQuery({
		queryKey: movieQueryKey.fetchMovies(take, cursor, title).queryKey,
		queryFn: () => movie.movieControllerFindAll(query),
	})
}

export const useFetchMovie = (id: number) =>
	useQuery({
		queryKey: movieQueryKey.fetchMovie(id).queryKey,
		queryFn: () => movie.movieControllerFindOne(id),
		enabled: !!id,
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

export const useFetchWishlist = () => {
	return useQuery({
		queryKey: movieQueryKey.fetchWishlist().queryKey,
		queryFn: () => wishlist.movieControllerFindAllMovieWish(),
	})
}

export const usePostWishlist = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => wishlist.movieControllerCreateMovieWish(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchWishlist().queryKey })
		},
		onError: (error) => {
			console.log(error)
		},
	})
}
