import { AddModal } from '@features/admin/ui/add-modal'
import { EditModal } from '@features/admin/ui/edit-modal'
import { AdminTable } from '@widgets/admin'
import { directorColumns } from '@widgets/admin/const/director-columns'
import { useState } from 'react'
import { flushSync } from 'react-dom'
import { useDeleteDirector, useFetchDirector, useFetchDirectors, usePatchDirector, usePostDirector } from 'src/shared/models'

const directorModal = {
	currentMenu: 'director',
	formItems: ['name', 'dob', 'nationality'],
}

export function Director() {
	const [open, setOpen] = useState(false)

	const [directorId, setDirectorId] = useState(1)

	const { data: directorsData, isLoading } = useFetchDirectors()
	const { data: directorData, isLoading: directorLoading, refetch: refetchDirector } = useFetchDirector(directorId)
	const { mutateAsync: postDirector } = usePostDirector()
	const { mutateAsync: patchDirector } = usePatchDirector()
	const { mutateAsync: deleteDirector } = useDeleteDirector()

	const handleDetail = (id: string) => async () => {
		flushSync(() => setDirectorId(Number(id)))
		refetchDirector()
		setOpen(true)
	}

	const handleNext = () => {
		console.log(123)
	}

	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">director</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !directorsData ? (
				<div>No data</div>
			) : (
				<AdminTable
					currentMenu="director"
					data={directorsData}
					columns={directorColumns}
					handleDetail={handleDetail}
					count={directorsData.length}
					handleNext={handleNext}
				/>
			)}

			<AddModal mutateAsync={postDirector} {...directorModal} />
			{directorLoading ? (
				<div>Loading...</div>
			) : (
				<EditModal
					data={directorData}
					open={open}
					setOpen={setOpen}
					mutateAsync={patchDirector}
					deleteAsync={deleteDirector}
					{...directorModal}
				/>
			)}
		</div>
	)
}
