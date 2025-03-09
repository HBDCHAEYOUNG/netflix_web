import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import user from '../api/user'
import { CreateUserProfileDtoDto, UpdateUserDtoDto, UpdateUserProfileDtoDto } from '../api/data-contracts'
import { authQueryKey } from './auth.model'
import { AuthStore } from '@store/auth-store'

export const userQueryKey = createQueryKeys('user', {
	fetchUsers: (page: number, take: number) => [page, take],
	fetchUser: (id: number) => [id],
})

export const useFetchUsers = (page: number, take: number) => {
	return useQuery({
		queryKey: userQueryKey.fetchUsers(page, take).queryKey,
		queryFn: () => user.userControllerFindAll({ page, take }),
	})
}

export const useFetchUser = (id: number) => {
	return useQuery({
		queryKey: userQueryKey.fetchUser(id).queryKey,
		queryFn: () => user.userControllerFindOne(id),
		enabled: !!id,
	})
}

export const usePatchUser = () => {
	const queryClient = useQueryClient()
	const { setLogin } = AuthStore()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: UpdateUserDtoDto }) => {
			const newData = {
				role: data.role,
			}
			return user.userControllerUpdate(id, newData)
		},
		onSuccess: (data) => {
			console.log(111, data)
			setLogin(data?.accessToken, data?.refreshToken)
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
			queryClient.invalidateQueries({ queryKey: authQueryKey.fetchMe().queryKey })
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
	const { setLogin } = AuthStore()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: CreateUserProfileDtoDto }) =>
			user.userControllerCreateUserProfile(id, data),
		onSuccess: (data) => {
			setLogin(data?.accessToken, data?.refreshToken)
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
			queryClient.invalidateQueries({ queryKey: authQueryKey.fetchMe().queryKey })
		},
	})
}

export const usePostProfileAccess = () => {
	const { setLogin } = AuthStore()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, profileId }: { id: number; profileId: number }) =>
			user.userControllerAccessUserProfile(profileId, id),
		onSuccess: (data) => {
			setLogin(data?.accessToken, data?.refreshToken)
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
			queryClient.invalidateQueries({ queryKey: authQueryKey.fetchMe().queryKey })
		},
	})
}

export const usePatchProfile = () => {
	const { setLogin } = AuthStore()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ profileId, id, data }: { profileId: number; id: number; data: UpdateUserProfileDtoDto }) =>
			user.userControllerUpdateUserProfile(profileId, id, data),
		onSuccess: (data) => {
			setLogin(data?.accessToken, data?.refreshToken)
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
			queryClient.invalidateQueries({ queryKey: authQueryKey.fetchMe().queryKey })
		},
	})
}

export const useDeleteProfile = () => {
	const { setLogin } = AuthStore()
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, profileId }: { id: number; profileId: number }) =>
			user.userControllerDeleteUserProfile(id, profileId),
		onSuccess: (data) => {
			setLogin(data?.accessToken, data?.refreshToken)
			queryClient.invalidateQueries({ queryKey: userQueryKey._def })
			queryClient.invalidateQueries({ queryKey: authQueryKey.fetchMe().queryKey })
		},
	})
}
