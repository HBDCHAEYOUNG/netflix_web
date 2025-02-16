import { useParams } from 'react-router-dom'
import { useFetchMovie } from 'src/shared/models'

export function Watch() {
	const { movieId } = useParams()
	const { data, isLoading, error } = useFetchMovie(Number(movieId))
	const movieFilePath = data?.movieFilePath
		? `http://localhost:3000/${data.movieFilePath}`
		: 'https://videos.pexels.com/video-files/15375094/15375094-uhd_2560_1440_30fps.mp4'

	if (isLoading) return <div className="h-screen flex-center">로딩중...</div>
	if (error) return <div className="h-screen flex-center">에러가 발생했습니다</div>
	if (!movieFilePath) return <div className="h-screen flex-center">동영상을 찾을 수 없습니다</div>

	return (
		<div className="h-screen">
			<video controls autoPlay preload="auto" className="mx-auto h-full object-contain">
				<source src={movieFilePath} type="video/mp4" />
			</video>
		</div>
	)
}
