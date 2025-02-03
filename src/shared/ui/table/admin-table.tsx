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
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { DATA } from 'src/shared/const/data'
import { Filters } from './filters'

type TableData = (typeof DATA)[0]

const columns: ColumnDef<TableData>[] = [
	{ accessorKey: 'title', header: 'Title', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'director', header: 'Director', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'date', header: 'Date', cell: (info) => <div>{info.getValue() as string}</div> },
	{ accessorKey: 'content', header: 'Content', cell: (info) => <div>{info.getValue() as string}</div> },
]

export function AdminTable() {
	const form = useForm()

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
	console.log(data)
	return (
		<div className="px-10 pb-20">
			<Filters setColumnFilters={setColumnFilters} className="absolute right-24 top-[84px]" />

			<Dialog>
				<DialogTrigger className="absolute right-10 top-[84px]">
					<button className="rounded-lg border border-Grey/Grey-20 bg-Primary/White px-3 py-1 !text-Primary/Black">Add</button>
				</DialogTrigger>
				<DialogContent className="!max-w-[800px] bg-Primary/White [&_*]:text-Primary/Black">
					<DialogHeader>
						<DialogTitle className="absolute left-6 top-5 text-start Regular-Headline">Add Movie</DialogTitle>
					</DialogHeader>
					<Form
						form={form}
						onSubmit={() => {
							const title = form.watch('title')
							const director = form.watch('director')
							const date = form.watch('date')
							const content = form.watch('content')

							setData((prev) => [...prev, { title, director, date, content }])
						}}
						className="flex flex-col gap-1"
					>
						<div className="flex w-full justify-evenly gap-1">
							<div className="w-full">
								<Form.Item name="imgUrl">
									<InputText label="imgUrl" className="w-full bg-transparent" />
								</Form.Item>
								{form.watch('imgUrl') && (
									<div className="relative mt-1 aspect-video w-full overflow-hidden rounded-md">
										<img src={form.watch('imgUrl')} alt="img" className="absolute inset-0 h-full w-full object-cover" />
									</div>
								)}
							</div>
							<div className="w-full">
								<Form.Item name="videoUrl">
									<InputText label="videoUrl" className="bg-transparent" />
								</Form.Item>
								{form.watch('videoUrl') && (
									<video controls className="mt-1 aspect-video w-full overflow-hidden rounded-md">
										<source src={form.watch('videoUrl')} className="h-full w-full object-contain" />
									</video>
								)}
							</div>
						</div>
						<Form.Item name="title">
							<InputText label="Title" className="bg-transparent" />
						</Form.Item>
						<Form.Item name="director">
							<InputText label="Director" className="bg-transparent" />
						</Form.Item>
						<Form.Item name="date">
							<InputText label="Date" className="bg-transparent" />
						</Form.Item>
						<Form.Item name="content">
							<InputText label="Content" className="bg-transparent" />
						</Form.Item>
					</Form>
					<DialogClose>
						<button className="mt-2 rounded-md bg-Primary/Red px-10 py-2 font-bold !text-Primary/White">Add</button>
					</DialogClose>
				</DialogContent>
			</Dialog>

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
