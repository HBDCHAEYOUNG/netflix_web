import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
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
	})
