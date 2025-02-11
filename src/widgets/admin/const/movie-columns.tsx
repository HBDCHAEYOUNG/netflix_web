import { ColumnDef } from '@tanstack/react-table'
import { MovieControllerFindAllDataDto } from 'src/shared/api'

export const movieColumns: ColumnDef<MovieControllerFindAllDataDto['data'][0]>[] = [
	{ accessorKey: 'title', header: 'Title', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'genre', header: 'Genre', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'director.name', header: 'Director', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'detail.detail', header: 'Detail', cell: (info) => <div>{info.getValue() as string}</div> },
]
