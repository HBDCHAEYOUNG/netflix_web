import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import user from '../api/user'
import { UpdateUserDtoDto } from '../api/data-contracts'

export const userQueryKey = createQueryKeys('user', {
	fetchUser: (id: number) => [id],
})

export const useFetchUsers = () => {
	return useQuery({
		queryKey: userQueryKey._def,
		queryFn: () => user.userControllerFindAll(),
	})
}

export const useFetchUser = (id: number) => {
	return useQuery({
		queryKey: userQueryKey.fetchUser(id).queryKey,
		queryFn: () => user.userControllerFindOne(id),
	})
}

export const usePatchUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: UpdateUserDtoDto }) => {
			const newData = {
				role: data.role,
			}
			return user.userControllerUpdate(id, newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
		},
	})
}

export const useDeleteUser = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => user.userControllerRemove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
		},
	})
}
