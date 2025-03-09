import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery } from '@tanstack/react-query'
import auth from '../api/auth'
import { EmailCheckDtoDto } from '../api/data-contracts'

export const authQueryKey = createQueryKeys('auth', {
	fetchMe: () => ['me'],
})

export const useFetchAuth = () => {
	return useQuery({
		queryKey: authQueryKey.fetchMe().queryKey,
		queryFn: () => auth.authControllerPrivate(),
	})
}

export const usePostEmailCheck = () => {
	return useMutation({
		mutationFn: (data: EmailCheckDtoDto) => auth.authControllerEmail(data),
		onSuccess: () => {
			console.log('사용가능한 이메일')
		},
		onError: () => {
			console.log('존재하는 이메일')
		},
	})
}
