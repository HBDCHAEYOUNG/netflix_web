import { MovieItems } from '@entities/admin/ui/movie-items'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface AddModalProps {
	currentMenu: string
	formItems: string[]
	mutateAsync: (data: any) => void
}

export function AddModal({ currentMenu, formItems, mutateAsync }: AddModalProps) {
	const form = useForm()

	const [open, setOpen] = useState(false)

	const onSubmitAdd = async () => {
		try {
			const values = form.getValues()
			console.log(1111, values)
			await mutateAsync(values)
			alert('add success')
			setOpen(false)
		} catch (e: any) {
			console.log(e)
			alert('add failed')
		}
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="absolute right-10 top-[84px]">
				<button className="rounded-lg border border-Grey/Grey-20 bg-Primary/White px-3 py-1 !text-Primary/Black">
					Add
				</button>
			</DialogTrigger>
			<DialogContent className="!max-w-[600px] bg-Primary/White px-28 pb-10 [&_*]:text-Primary/Black">
				<DialogHeader>
					<DialogTitle className="absolute left-6 top-5 text-start Regular-Headline">Add {currentMenu}</DialogTitle>
				</DialogHeader>
				<Form form={form} onSubmit={onSubmitAdd} className="flex flex-col gap-1">
					{formItems.map((item) => (
						<Form.Item key={item} name={item}>
							<InputText label={item} className="border-Grey/Grey-20 bg-transparent" />
						</Form.Item>
					))}

					{currentMenu === 'movie' && <MovieItems form={form} />}
					<button type="submit" className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">
						Add
					</button>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
