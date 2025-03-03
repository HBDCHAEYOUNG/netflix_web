import { MovieItems } from '@entities/admin/ui/movie-items'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface EditModalProps {
	data: any
	currentMenu: string
	formItems: string[]
	open: boolean
	setOpen: (open: boolean) => void
	mutateAsync: (data: any) => Promise<any>
	deleteAsync: (id: number) => Promise<any>
}

export function EditModal({ data, currentMenu, formItems, open, setOpen, mutateAsync, deleteAsync }: EditModalProps) {
	const form = useForm()

	const onSubmitEdit = async () => {
		try {
			const values = form.getValues()
			await mutateAsync({ id: data.id, data: values })
			alert('edit success')
			setOpen(false)
		} catch (e: any) {
			alert(e.error.message)
		}
	}

	const handleDelete = async () => {
		if (confirm('Are you sure you want to delete?')) {
			try {
				await deleteAsync(data.id)
				setOpen(false)
				alert('delete success')
			} catch (e: any) {
				alert(e.error.message)
			}
		}
	}

	useEffect(() => {
		if (currentMenu === 'movie' && data) {
			form.reset({
				title: data.title,
				director: data.director.id,
				genreIds: data.genres.map((genre: any) => parseInt(genre.id, 10)),
				movieFilePath: data.movieFilePath,
				thumbnail: data.thumbnail,
				detail: data.detail.detail,
			})
		}
		if (currentMenu === 'director' && data) {
			form.reset({
				name: data.name,
				dob: data.dob,
				nationality: data.nationality,
			})
		}
		if (currentMenu === 'genre' && data) {
			form.reset({
				name: data.name,
			})
		}
		if (currentMenu === 'user' && data) {
			form.reset({
				role: data.role,
			})
		}
	}, [currentMenu, data, form])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="!max-w-[600px] bg-Primary/White px-28 pb-10 [&_*]:text-Primary/Black">
				<DialogHeader>
					<DialogTitle className="absolute left-6 top-5 text-start Regular-Headline">Edit {currentMenu}</DialogTitle>
				</DialogHeader>
				<Form form={form} onSubmit={onSubmitEdit} className="flex flex-col gap-1">
					{formItems.map((item) => (
						<Form.Item key={item} name={item}>
							<InputText label={item} className="border-Grey/Grey-20 bg-transparent" />
						</Form.Item>
					))}
					{currentMenu === 'movie' && <MovieItems form={form} />}
					<div className="flex gap-1">
						<button
							type="submit"
							className="mt-8 w-full rounded-md bg-Primary/Black py-4 font-bold !text-Primary/White"
						>
							Save
						</button>
						<button
							type="button"
							onClick={handleDelete}
							className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White"
						>
							Delete
						</button>
					</div>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
