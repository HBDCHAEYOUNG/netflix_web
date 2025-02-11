import { AddModal } from '@features/admin/ui/add-modal'
import { AdminTable } from '@widgets/admin'
import { directorColumns } from '@widgets/admin/const/director-columns'
import { useFetchDirectors, usePostDirector } from 'src/shared/models'

export function Director() {
	const { data: directorsData, isLoading } = useFetchDirectors()
	const { mutateAsync } = usePostDirector()

	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">director</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !directorsData ? (
				<div>No data</div>
			) : (
				<AdminTable currentMenu="director" data={directorsData} inputItems={['name']} columns={directorColumns} />
			)}

			<AddModal mutateAsync={mutateAsync} currentMenu="director" formItems={['name', 'dob', 'nationality']} />
		</div>
	)
}
