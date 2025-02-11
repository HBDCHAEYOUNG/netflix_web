import { ColumnDef } from '@tanstack/react-table'
import { DirectorControllerFindAllDataDto } from 'src/shared/api/data-contracts'

export const directorColumns: ColumnDef<DirectorControllerFindAllDataDto[0]>[] = [
	{ accessorKey: 'name', header: 'name', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'dob', header: 'Director', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'createdAt', header: 'Date', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'nationality', header: 'Nationality', cell: (info) => <div>{info.getValue() as string}</div> },
]
