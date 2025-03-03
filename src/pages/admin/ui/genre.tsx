import { AddModal } from '@features/admin/ui/add-modal'
import { EditModal } from '@features/admin/ui/edit-modal'
import { AdminTable } from '@widgets/admin'
import { genreColumns } from '@widgets/admin/const/genre-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import {
	useDeleteGenre,
	useFetchGenre,
	useFetchGenres,
	usePatchGenre,
	usePostGenre,
} from 'src/shared/models/genre.model'

const genreModal = {
	currentMenu: 'genre',
	formItems: ['name'],
}

export function Genre() {
	const [open, setOpen] = useState(false)
	const [genreId, setGenreId] = useState(1)

	const [pageIndex, setPageIndex] = useState(1)
	const [take, setTake] = useState(7)

	const { data: genresData, isLoading } = useFetchGenres(pageIndex, take)
	const { data: genreData, isLoading: genreLoading, refetch: refetchGenre } = useFetchGenre(genreId)
	const { mutateAsync: postGenre } = usePostGenre()
	const { mutateAsync: patchGenre } = usePatchGenre()
	const { mutateAsync: deleteGenre } = useDeleteGenre()

	const handleDetail = (id: string) => async () => {
		flushSync(() => setGenreId(Number(id)))
		refetchGenre()
		setOpen(true)
	}

	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">genre</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !genresData ? (
				<div>No data</div>
			) : (
				<AdminTable
					data={genresData.data}
					currentMenu="genre"
					columns={genreColumns}
					handleDetail={handleDetail}
					pageIndex={pageIndex}
					setPageIndex={setPageIndex}
					take={take}
					count={genresData.count}
					setTake={setTake}
				/>
			)}

			<AddModal mutateAsync={postGenre} {...genreModal} />

			{genreLoading ? (
				<div>Loading...</div>
			) : (
				<EditModal
					data={genreData}
					{...genreModal}
					open={open}
					setOpen={setOpen}
					mutateAsync={patchGenre}
					deleteAsync={deleteGenre}
				/>
			)}
		</div>
	)
}
