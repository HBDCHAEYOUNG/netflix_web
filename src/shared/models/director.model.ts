import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import director from '../api/director'
import { CreateDirectorDtoDto } from '../api/data-contracts'
import { movieQueryKey } from './movie.model'

export const directorQueryKey = createQueryKeys('director', {
	fetchDirectors: (page: number, take: number) => [page, take],
	fetchDirector: (id: number) => [id],
})

export const useFetchDirectors = (page: number, take: number) =>
	useQuery({
		queryKey: directorQueryKey.fetchDirectors(page, take).queryKey,
		queryFn: () => director.directorControllerFindAll({ page, take }),
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
				dob: data.dob,
				nationality: data.nationality,
				name: data.name,
			}
			return director.directorControllerUpdate(id, newData)
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: directorQueryKey._def })
			queryClient.invalidateQueries({ queryKey: movieQueryKey._def })
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
