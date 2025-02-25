import { AddModal } from '@features/admin/ui/add-modal'
import { EditModal } from '@features/admin/ui/edit-modal'
import { ReadModal } from '@features/admin/ui/read-modal'
import { AdminTable } from '@widgets/admin'
import { movieColumns } from '@widgets/admin/const/movie-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useDeleteMovie, useFetchMovie, useFetchMovies, usePatchMovie, usePostMovie } from 'src/shared/models'

const movieReadModal = {
	currentMenu: 'movie',
	formItems: ['title', 'director', 'genre', 'movieFile'],
}

const movieEditModal = {
	currentMenu: 'movie',
	formItems: ['title', 'director', 'genre', 'movieFile'],
}

export function Movie() {
	const [openRead, setOpenRead] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [movieId, setMovieId] = useState(0)
	const [nextCursor, setNextCursor] = useState('')
	const [pageIndex, setPageIndex] = useState(1)
	const take = 3

	const { data: moviesData, isLoading } = useFetchMovies(take, nextCursor)
	const { data: movieData, isLoading: movieLoading, refetch: refetchMovie } = useFetchMovie(movieId)
	const { mutateAsync: postMovie } = usePostMovie()
	const { mutateAsync: patchMovie } = usePatchMovie()
	const { mutateAsync: deleteMovie } = useDeleteMovie()

	const handleDetail = (id: string) => async () => {
		flushSync(() => setMovieId(Number(id)))
		refetchMovie()
		setOpenRead(true)
	}

	// const handleNext = () => {
	// 	console.log(123)
	// 	// table.nextPage()
	// 	setNextCursor((moviesData as any)?.nextCursor)
	// 	// console.log(123, data)
	// 	console.log(moviesData)
	// 	// setNextCursor(moviesData?.data.nextCursor)
	// }
	console.log(setNextCursor)
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
					columns={movieColumns}
					handleDetail={handleDetail}
					count={(moviesData as any)?.count}
					pageIndex={pageIndex}
					setPageIndex={setPageIndex}
					take={take}
				/>
			)}

			<AddModal mutateAsync={postMovie} {...movieEditModal} />
			{movieLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<ReadModal data={movieData} {...movieReadModal} open={openRead} setOpen={setOpenRead} setOpenEdit={setOpenEdit} />
					<EditModal
						data={movieData}
						open={openEdit}
						setOpen={setOpenEdit}
						mutateAsync={patchMovie}
						deleteAsync={deleteMovie}
						{...movieEditModal}
					/>
				</>
			)}
		</div>
	)
}
