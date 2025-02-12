import { AddModal } from '@features/admin/ui/add-modal'
import { EditModal } from '@features/admin/ui/edit-modal'
import { AdminTable } from '@widgets/admin'
import { genreColumns } from '@widgets/admin/const/genre-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useDeleteGenre, useFetchGenre, useFetchGenres, usePatchGenre, usePostGenre } from 'src/shared/models/genre.model'

const genreModal = {
	currentMenu: 'genre',
	formItems: ['name'],
}

export function Genre() {
	const [open, setOpen] = useState(false)
	const [genreId, setGenreId] = useState(1)

	const { data: genresData, isLoading } = useFetchGenres()
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
				<AdminTable currentMenu="genre" data={genresData} inputItems={['name']} columns={genreColumns} handleDetail={handleDetail} />
			)}

			<AddModal mutateAsync={postGenre} currentMenu="genre" formItems={['name']} />

			{genreLoading ? (
				<div>Loading...</div>
			) : (
				<EditModal data={genreData} {...genreModal} open={open} setOpen={setOpen} mutateAsync={patchGenre} deleteAsync={deleteGenre} />
			)}
		</div>
	)
}
