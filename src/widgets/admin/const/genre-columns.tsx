import { ColumnDef } from '@tanstack/react-table'
import { GenreControllerFindAllDataDto } from 'src/shared/api/data-contracts'

export const genreColumns: ColumnDef<GenreControllerFindAllDataDto>[] = [
	{ accessorKey: 'name', header: 'name', cell: (info) => <div>{info.getValue() as string}</div> },
]
