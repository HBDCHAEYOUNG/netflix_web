import { ColumnDef } from '@tanstack/react-table'
import { MovieControllerFindAllDataDto } from 'src/shared/api/data-contracts'

export const movieColumns: ColumnDef<MovieControllerFindAllDataDto['data'][0]>[] = [
	{ accessorKey: 'title', header: 'Title', cell: (info) => <div>{info.getValue() as string}</div> },
	{
		accessorKey: 'genres',
		header: 'Genre',
		cell: (info: any) => (
			<div>
				{info
					.getValue()
					?.map((genre: any) => genre.name)
					.join(', ')}
			</div>
		),
	},
	{ accessorKey: 'director.name', header: 'Director', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'detail.detail', header: 'Detail', cell: (info) => <div>{info.getValue() as string}</div> },
]
