import { AddModal } from '@features/admin/ui/add-modal'
import { AdminTable } from '@widgets/admin'
import { genreColumns } from '@widgets/admin/const/genre-columns'
import { useFetchGenres, usePostGenre } from 'src/shared/models/genre.model'

export function Genre() {
	const { data: genresData, isLoading } = useFetchGenres()
	const { mutateAsync } = usePostGenre()

	return (
		<div className="pl-72 [&_*]:text-Primary/Black">
			<h1 className="px-10 pb-4 pt-[84px] Bold-Title2">genre</h1>
			{isLoading ? (
				<div>Loading...</div>
			) : !genresData ? (
				<div>No data</div>
			) : (
				<AdminTable currentMenu="genre" data={genresData} inputItems={['name']} columns={genreColumns} />
			)}

			<AddModal mutateAsync={mutateAsync} currentMenu="genre" formItems={['name']} />
		</div>
	)
}
