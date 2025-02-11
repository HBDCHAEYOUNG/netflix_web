import { AddModal } from '@features/admin/ui/add-modal'
import { EditModal } from '@features/admin/ui/edit-modal'
import { AdminTable } from '@widgets/admin'
import { movieColumns } from '@widgets/admin/const/movie-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useFetchMovie, useFetchMovies, usePatchMovie, usePostMovie } from 'src/shared/models'

const movieModal = {
	currentMenu: 'movie',
	formItems: ['title', 'director', 'genre', 'movieFile'],
}

export function Movie() {
	const [open, setOpen] = useState(false)
	const [movieId, setMovieId] = useState(0)

	const { data: moviesData, isLoading } = useFetchMovies(0, 6)
	const { data: movieData, isLoading: movieLoading, refetch: refetchMovie } = useFetchMovie(movieId)
	const { mutateAsync: postMovie } = usePostMovie()
	const { mutateAsync: patchMovie } = usePatchMovie()

	const handleDetail = (id: string) => async () => {
		flushSync(() => setMovieId(Number(id)))
		refetchMovie()
		setOpen(true)
	}

	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">movie</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !moviesData?.data ? (
				<div>No data</div>
			) : (
				<AdminTable
					currentMenu="movie"
					data={moviesData?.data}
					inputItems={['title', 'director', 'genre', 'movieFile']}
					columns={movieColumns}
					handleDetail={handleDetail}
				/>
			)}

			<AddModal mutateAsync={postMovie} {...movieModal} />
			{movieLoading ? (
				<div>Loading...</div>
			) : (
				<EditModal data={movieData} open={open} setOpen={setOpen} mutateAsync={patchMovie} {...movieModal} />
			)}
		</div>
	)
}
