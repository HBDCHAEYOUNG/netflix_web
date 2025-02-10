import { createQueryKeys } from '@lukemorales/query-key-factory'
import { useQuery } from '@tanstack/react-query'
import banner from '../api/banner'

export const bannerQueryKey = createQueryKeys('banner')

export const useFetchBanner = () =>
	useQuery({
		queryKey: bannerQueryKey._def,
		queryFn: () => banner.movieControllerFindAllMovieBanner(),
	})
