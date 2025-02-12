import { createQueryKeys } from '@lukemorales/query-key-factory'
import { CommonControllerCreatedVideoDataDto } from '../api/data-contracts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import common from '../api/common'

export const videoQueryKey = createQueryKeys('video')

export const usePostVideo = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: CommonControllerCreatedVideoDataDto) => common.commonControllerCreatedVideo(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: videoQueryKey._def })
		},
	})
}
