import Sort from '@icons/sort.svg?react'
import {
	ColumnDef,
	ColumnFiltersState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@ui/_shardcn/table'

import { useState } from 'react'
import { Add } from '@features/admin/ui/add'
import { Filters } from '@ui/index'
import { DATA } from '../const/data'

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
	const [pagination, setPagination] = useState({
		pageIndex: 0, //initial page index
		pageSize: 6, //default page size
	})

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		state: {
			columnFilters,
			sorting,
			pagination,
		},
		onSortingChange: setSorting,
		onPaginationChange: setPagination,
	})
	return (
		<div className="px-10 pb-20">
			<Filters setColumnFilters={setColumnFilters} className="absolute right-24 top-[84px]" />
			<Add setData={setData} />
			<Table className="mt-2 rounded-lg">
				<TableHeader className="h-16">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id} className="text-base">
									<div className="gap-2 flex-center">
										{header.column.columnDef.header}
										{header.column.getCanSort() && (
											<Sort className="h-4 w-4 cursor-pointer" onClick={header.column.getToggleSortingHandler()} />
										)}
										{header.column.getIsSorted() === 'asc' ? '⬇️ ' : '⬆️ '}
									</div>
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
			<div className="mt-4 flex items-center">
				Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
				<button
					className="ml-auto mr-1 cursor-pointer border border-Grey/Grey-20 bg-Primary/White px-2 py-1"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</button>
				<button
					className="w-fit cursor-pointer border border-Grey/Grey-20 bg-Primary/White px-2 py-1"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</button>
			</div>
		</div>
	)
}
