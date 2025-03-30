import { ColumnDef } from '@tanstack/react-table'
import { UserControllerFindAllDataDto } from 'src/shared/api/data-contracts'

export const userColumns: ColumnDef<UserControllerFindAllDataDto>[] = [
	{ accessorKey: 'email', header: 'email', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'role', header: 'role', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'profileCount', header: 'profileCount', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'createdAt', header: 'createdAt', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'id', header: 'id', cell: (info) => <div>{info.getValue() as string}</div> },
]
