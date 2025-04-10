import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import movie from '../api/movie'
import { MovieControllerFindAllParamsDto } from '../api/data-contracts'
import wishlist from '../api/wishlist'
import like from '../api/like'

export const movieQueryKey = createQueryKeys('movie', {
	fetchMovies: (take: number, pagination: string | number, title?: string) => [take, pagination, title],
	fetchMovie: (id: number) => [id],
	fetchWishlist: () => ['infinite', 'whislist'],
	fetchInfiniteMovies: (genreId?: number) => ['infinite', 'movies', genreId],
	fetchRecommendations: (id: number) => [id],
})

export const useFetchMovies = ({
	take,
	page,
	cursor,
	title,
	order,
}: Omit<MovieControllerFindAllParamsDto, 'order'> & { order?: string[] }) => {
	const query: MovieControllerFindAllParamsDto = {
		order: ['id_DESC'],
		take,
		title,
	}

	if (cursor) Object.assign(query, { cursor })
	if (page) Object.assign(query, { page })
	if (title) Object.assign(query, { title })
	if (order) Object.assign(query, { order })
	return useQuery({
		queryKey: movieQueryKey.fetchMovies(take, (cursor ?? page ?? title) as string | number).queryKey,
		queryFn: () => movie.movieControllerFindAll(query),
	})
}

export const useInfiniteFetchMovies = (take: number, genreId?: number) => {
	return useInfiniteQuery({
		queryKey: movieQueryKey.fetchInfiniteMovies(genreId).queryKey,
		queryFn: async ({ pageParam }) => {
			const query = {
				order: ['id_DESC'],
				take: take,
				cursor: pageParam,
			}
			if (genreId) Object.assign(query, { genreId })
			return movie.movieControllerFindAll(query)
		},
		initialPageParam: undefined,
		getNextPageParam: (lastPage: any) => {
			return lastPage.count > take ? lastPage.nextCursor : undefined
		},
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
				genreIds: data.genreIds,
				movieFilePath: data.movieFilePath,
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
				genreIds: data.genreIds,
				movieFilePath: data.movieFilePath,
				thumbnail: data.thumbnail,
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

export const useFetchWishlist = (take: number) => {
	return useInfiniteQuery({
		queryKey: movieQueryKey.fetchWishlist().queryKey,
		queryFn: ({ pageParam }) => {
			return wishlist.movieControllerFindAllMovieWish({
				take,
				page: pageParam,
			})
		},
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.count > take * allPages.length ? allPages.length + 1 : undefined
		},
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

export const useFetchRecommendations = (id: number, take: number) => {
	return useInfiniteQuery({
		queryKey: movieQueryKey.fetchRecommendations(id).queryKey,
		queryFn: ({ pageParam }) => movie.movieControllerFindSameGenre({ id, page: pageParam, take }),
		initialPageParam: 1,
		getNextPageParam: (lastPage: any, allPages: any) => {
			return lastPage.count > take * allPages.length ? allPages.length + 1 : undefined
		},
	})
}
