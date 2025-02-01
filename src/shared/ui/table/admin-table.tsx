import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/_shardcn/table'
import { useState } from 'react'
import { DATA } from 'src/shared/const/data'
import { Filters } from './filters'
import Sort from '@icons/sort.svg?react'

type TableData = (typeof DATA)[0]

const columns: ColumnDef<TableData>[] = [
	{ accessorKey: 'title', header: 'Title', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'director', header: 'Director', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'date', header: 'Date', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'content', header: 'Content', cell: (info) => <div>{info.getValue() as string}</div> },
]

export function AdminTable() {
	const [data, setData] = useState(DATA)
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [sorting, setSorting] = useState<SortingState>([])

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		state: {
			columnFilters,
			sorting,
		},
		onSortingChange: setSorting,
	})
	console.log(setData)
	return (
		<div className="px-10">
			<Filters columnFilters={columnFilters} setColumnFilters={setColumnFilters} />
			<Table className="mt-2 overflow-hidden rounded-lg [&_*]:text-base">
				<TableHeader className="h-16">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id}>
									{header.column.columnDef.header}
									{header.column.getCanSort() && (
										<Sort className="h-4 w-4 cursor-pointer" onClick={header.column.getToggleSortingHandler()} />
									)}
									{header.column.getIsSorted()}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows.map((row) => (
						<TableRow key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<p>{table.getState().pagination.pageIndex}</p>
		</div>
	)
}
