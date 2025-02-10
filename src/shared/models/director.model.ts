import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
import director from '../api/director'

export const directorQueryKey = createQueryKeys('director')

export const useFetchDirectors = () =>
	useQuery({
		queryKey: directorQueryKey._def,
		queryFn: () => director.directorControllerFindAll(),
	})
