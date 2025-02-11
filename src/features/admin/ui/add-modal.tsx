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
			await mutateAsync(form.getValues())
			alert('add success')
			setOpen(false)
		} catch (e: any) {
			console.log(e)
			alert('add failed')
		}
		// if (currentMenu === 'director') {
		// 	const name = form.watch('name')
		// 	const dob = form.watch('dob')
		// 	const nationality = form.watch('nationality')

		// 	postDirector({ name, dob, nationality })
		// } else if (currentMenu === 'movie') {
		// 	const title = form.watch('title')
		// 	const directorId = Number(form.watch('director'))
		// 	const genreIds = [Number(form.watch('genre'))]
		// 	const detail = form.watch('detail')
		// 	const movieFileName = form.watch('movieFile')
		// 	postMovie({ title, directorId, genreIds, detail, movieFileName })
		// 	console.log({ title, directorId, genreIds, detail, movieFileName })
		// } else if (currentMenu === 'genre') {
		// 	const name = form.watch('name')
		// 	postGenre({ name })
		// }
	}

	// useEffect(() => {
	// 	if (currentMenu === 'director') {
	// 		setFormItems(['name', 'dob', 'nationality'])
	// 	} else if (currentMenu === 'movie') {
	// 		setFormItems(['title', 'director', 'genre', 'movieFile'])
	// 	} else if (currentMenu === 'genre') {
	// 		setFormItems(['name'])
	// 	}
	// }, [currentMenu])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger className="absolute right-10 top-[84px]">
				<button className="rounded-lg border border-Grey/Grey-20 bg-Primary/White px-3 py-1 !text-Primary/Black">Add</button>
			</DialogTrigger>
			<DialogContent className="!max-w-[600px] bg-Primary/White px-28 pb-10 [&_*]:text-Primary/Black">
				<DialogHeader>
					<DialogTitle className="absolute left-6 top-5 text-start Regular-Headline">Add Movie</DialogTitle>
				</DialogHeader>
				<Form form={form} onSubmit={onSubmitAdd} className="flex flex-col gap-1">
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
					<button type="submit" className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">
						Add
					</button>
				</Form>
			</DialogContent>
		</Dialog>
	)
}

{
	/* <div className="flex w-full justify-evenly gap-1">
						<div className="w-full overflow-hidden rounded-md border border-Grey/Grey-20">
							<Form.Item name="imgUrl">
								<InputText label="imgUrl" className="w-full border-none bg-transparent" />
							</Form.Item>
							{form.watch('imgUrl') && (
								<div className="aspect-video w-full overflow-hidden rounded-md p-2">
									<img src={form.watch('imgUrl')} alt="img" className="h-full w-full rounded-md object-cover" />
								</div>
							)}
						</div>
						<div className="w-full overflow-hidden rounded-md border border-Grey/Grey-20">
							<Form.Item name="videoUrl">
								<InputText label="videoUrl" className="w-full border-none bg-transparent" />
							</Form.Item>
							{form.watch('videoUrl') && (
								<video controls className="aspect-video w-full overflow-hidden rounded-md p-2">
									<source src={form.watch('videoUrl')} className="h-full w-full object-contain" />
								</video>
							)}
						</div>
					</div> */
}
