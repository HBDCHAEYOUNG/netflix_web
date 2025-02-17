import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import director from '../api/director'
import { CreateDirectorDtoDto } from '../api/data-contracts'

export const directorQueryKey = createQueryKeys('director', {
	fetchDirector: (id: number) => [id],
})

export const useFetchDirectors = () =>
	useQuery({
		queryKey: directorQueryKey._def,
		queryFn: () => director.directorControllerFindAll(),
	})

export const usePostDirector = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: CreateDirectorDtoDto) => director.directorControllerCreate(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: directorQueryKey._def })
		},
		onError: (error) => {
			console.log('감독 추가 실패', error)
		},
	})
}

export const useFetchDirector = (id: number) =>
	useQuery({
		queryKey: directorQueryKey.fetchDirector(id).queryKey,
		queryFn: () => director.directorControllerFindOne(id),
		enabled: false,
	})

export const usePatchDirector = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: ({ id, data }: { id: number; data: any }) => {
			const newData = {
				detail: data.detail,
				directorFileName: data.directorFile,
				name: data.name,
			}
			return director.directorControllerUpdate(id, newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: directorQueryKey._def })
		},
	})
}

export const useDeleteDirector = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number) => director.directorControllerRemove(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: directorQueryKey._def })
		},
	})
}
