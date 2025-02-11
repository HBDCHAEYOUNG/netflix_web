import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { CreateDirectorDtoDto } from '../api'
import director from '../api/director'

export const directorQueryKey = createQueryKeys('director')

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
