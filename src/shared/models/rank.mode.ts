import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
import rank from '../api/rank'

export const rankQueryKey = createQueryKeys('rank')

export const useFetchRank = () => {
	return useQuery({
		queryKey: rankQueryKey._def,
		queryFn: () => rank.movieControllerFindAllMovieRank(),
	})
}
