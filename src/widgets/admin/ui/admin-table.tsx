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

import { Filters, Select } from '@ui/index'
import { useState } from 'react'

interface AdminTableProps {
	data: any[]
	currentMenu: 'movie' | 'director' | 'genre' | 'user'
	columns: ColumnDef<any>[]
	count: number
	handleDetail: (id: string) => () => void
	pageIndex: number
	setPageIndex: (pageIndex: number) => void
	take: number
	setTake: (take: number) => void
}

export function AdminTable({
	data,
	currentMenu,
	columns,
	handleDetail,
	count,
	pageIndex,
	setPageIndex,
	take,
	setTake,
}: AdminTableProps) {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [sorting, setSorting] = useState<SortingState>([])

	const totalPages = Math.ceil(count / take)

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
		},
		onSortingChange: setSorting,
	})

	const handlePageChange = (newPage: number) => {
		if (newPage >= 1 && newPage <= totalPages) {
			setPageIndex(newPage)
		}
	}

	return (
		<div className="px-10 pb-20">
			<Select
				items={['7', '15', '30']}
				type="admin"
				className="absolute right-[314px] top-[84px] h-[34px] w-20 rounded-none border border-Grey/Grey-20 bg-Primary/White text-Primary/Black"
				contentClassName="!rounded-none border-Grey/Grey-20 !bg-Primary/White"
				itemClassName="!rounded-none !bg-Primary/White"
				value={take.toString()}
				onChange={(value) => {
					setTake(Number(value))
				}}
			/>

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
					className="ml-auto mr-1 cursor-pointer border border-Grey/Grey-20 bg-Primary/White px-2 py-1 disabled:cursor-not-allowed disabled:bg-Grey/Grey-20 disabled:text-Grey/Grey-150"
					onClick={() => handlePageChange(pageIndex - 1)}
					disabled={pageIndex === 1}
				>
					Previous
				</button>
				{[...Array(totalPages)].map((_, index) => {
					const pageNum = index + 1
					return (
						<button
							key={pageNum}
							onClick={() => handlePageChange(pageNum)}
							className={`px-3 py-1 ${pageNum === pageIndex ? 'font-bold underline' : ''}`}
						>
							{pageNum}
						</button>
					)
				})}
				<button
					className="w-fit cursor-pointer border border-Grey/Grey-20 bg-Primary/White px-2 py-1 disabled:cursor-not-allowed disabled:bg-Grey/Grey-20 disabled:text-Grey/Grey-150"
					onClick={() => handlePageChange(pageIndex + 1)}
					disabled={pageIndex >= totalPages}
				>
					Next
				</button>
			</div>
		</div>
	)
}
