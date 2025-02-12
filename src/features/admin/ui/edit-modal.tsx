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
		console.log(data.id)
		try {
			await mutateAsync({ id: data.id, data: form.getValues() })
			alert('edit success')
			setOpen(false)
		} catch (e: any) {
			alert(e.error.message)
		}
	}

	const handleDelete = async () => {
		try {
			await deleteAsync(data.id)
			setOpen(false)
			alert('delete success')
		} catch (e: any) {
			alert(e.error.message)
		}
	}

	useEffect(() => {
		if (currentMenu === 'movie' && data) {
			console.log(data)
			form.reset({
				title: data.title,
				director: data.director.id,
				genre: data.genres.map((genre: any) => genre.id).join(','),
				movieFile: data.movieFilePath,
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
					{currentMenu === 'movie' && (
						<Form.Item name="detail">
							<textarea
								{...form.register('detail')}
								id="detail"
								className="min-h-60 w-full rounded-md border border-Grey/Grey-20 p-4 focus:outline-black"
								placeholder={`게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는`}
							/>
						</Form.Item>
					)}
					<div className="flex gap-1">
						<button type="submit" className="mt-8 w-full rounded-md bg-Primary/Black py-4 font-bold !text-Primary/White">
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
