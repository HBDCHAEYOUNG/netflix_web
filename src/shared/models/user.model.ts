import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import user from '../api/user'
import { CreateUserProfileDtoDto, UpdateUserDtoDto, UpdateUserProfileDtoDto } from '../api/data-contracts'

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

export const usePostProfile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: CreateUserProfileDtoDto }) => user.userControllerCreateUserProfile(id, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
		},
	})
}

export const usePatchProfile = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, profileId, data }: { id: string; profileId: string; data: UpdateUserProfileDtoDto }) =>
			user.userControllerUpdateUserProfile(id, profileId, data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
		},
	})
}
