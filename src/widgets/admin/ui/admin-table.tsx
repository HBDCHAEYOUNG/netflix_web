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

import { Filters } from '@ui/index'
import { useState } from 'react'

interface AdminTableProps {
	data: any[]
	currentMenu: 'movie' | 'director' | 'genre'
	inputItems: string[]
	columns: ColumnDef<any>[]
	handleDetail: (id: string) => () => void
}

export function AdminTable({ data, currentMenu, columns, handleDetail }: AdminTableProps) {
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
		<>
			<div className="px-10 pb-20">
				<Filters setColumnFilters={setColumnFilters} className="absolute right-24 top-[84px]" currentMenu={currentMenu} />
				<Table className="mt-2 rounded-lg">
					<TableHeader className="h-16">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} className="text-base">
										<div className="gap-2 flex-center">
											{header.id}
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
							<TableRow key={row.id} onClick={handleDetail(row.original.id)} className="cursor-pointer hover:bg-gray-50">
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
		</>
	)
}
