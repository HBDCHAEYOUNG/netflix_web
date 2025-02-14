import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
import banner from '../api/banner'

export const bannerQueryKey = createQueryKeys('banner')

export const useFetchBanner = () =>
	useQuery({
		queryKey: bannerQueryKey._def,
		queryFn: () => banner.movieControllerFindAllMovieBanner(),
		refetchOnMount: true, // 컴포넌트가 마운트될 때 데이터 다시 가져오기
		refetchOnWindowFocus: 'always',
		retry: 2, // 실패시 2번 재시도
	})
