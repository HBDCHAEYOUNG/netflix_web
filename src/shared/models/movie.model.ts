import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import movie from '../api/movie'
import { MovieControllerFindAllParamsDto } from '../api/data-contracts'
import wishlist from '../api/wishlist'
import like from '../api/like'

export const movieQueryKey = createQueryKeys('movie', {
	fetchMovies: (take: number, pagination: string | number, title?: string) => [take, pagination, title],
	fetchMovie: (id: number) => [id],
	fetchWishlist: () => ['whislist'],
})

export const useFetchMovies = (take: number, page?: number, cursor?: string, title?: string) => {
	const query: MovieControllerFindAllParamsDto = {
		order: ['id_DESC'],
		take,
		title,
	}

	if (cursor) Object.assign(query, { cursor })
	if (page) Object.assign(query, { page })
	if (title) Object.assign(query, { title })

	return useQuery({
		queryKey: movieQueryKey.fetchMovies(take, (cursor ?? page) as string | number).queryKey,
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
			console.log(123123, data)
			const newData = {
				detail: data.detail,
				directorId: Number(data.director),
				genreIds: [Number(data.genre)],
				movieFileName: data.movieFileName,
				thumbnail: data.thumbnail,
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
				movieFileName: data.movieFileName,
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
		queryFn: () =>
			wishlist.movieControllerFindAllMovieWish({
				take: 10,
				page: 1,
			}),
	})
}

export const usePostWishlist = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: number) => {
			await wishlist.movieControllerCreateMovieWish(id)
			return id
		},
		onSuccess: (id) => {
			console.log(movieQueryKey.fetchMovie(id).queryKey)
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchWishlist().queryKey })
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchMovie(id).queryKey })
		},

		onError: (error) => {
			console.log(error)
		},
	})
}

export const usePostLikeMovie = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: number) => {
			await like.movieControllerCreateMovieLike(id)
			return id
		},
		onSuccess: (id) => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchWishlist().queryKey })
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchMovie(id).queryKey })
		},
	})
}

export const usePostDislikeMovie = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: async (id: number) => {
			await like.movieControllerCreateMovieDislike(id)
			return id
		},
		onSuccess: (id) => {
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchWishlist().queryKey })
			queryClient.invalidateQueries({ queryKey: movieQueryKey.fetchMovie(id).queryKey })
		},
	})
}
