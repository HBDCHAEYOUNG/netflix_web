import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
import auth from '../api/auth'

export const authQueryKey = createQueryKeys('auth', {
	fetchMe: () => ['me'],
})

export const useFetchAuth = () => {
	return useQuery({
		queryKey: authQueryKey.fetchMe().queryKey,
		queryFn: () => auth.authControllerPrivate(),
	})
}
