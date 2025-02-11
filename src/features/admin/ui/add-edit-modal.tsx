import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePostDirector, usePostMovie } from 'src/shared/models'
import { usePostGenre } from 'src/shared/models/genre.model'

interface AddEditModalProps {
	currentMenu: string
}

export function AddEditModal({ currentMenu }: AddEditModalProps) {
	const form = useForm()

	const [formItems, setFormItems] = useState<string[]>([])

	const { mutate: postDirector } = usePostDirector()
	const { mutate: postMovie } = usePostMovie()
	const { mutate: postGenre } = usePostGenre()

	const onSubmitAdd = () => {
		if (currentMenu === 'director') {
			const name = form.watch('name')
			const dob = form.watch('dob')
			const nationality = form.watch('nationality')

			postDirector({ name, dob, nationality })
		} else if (currentMenu === 'movie') {
			const title = form.watch('title')
			const directorId = Number(form.watch('director'))
			const genreIds = [Number(form.watch('genre'))]
			const detail = form.watch('detail')
			const movieFileName = form.watch('movieFile')
			postMovie({ title, directorId, genreIds, detail, movieFileName })
			console.log({ title, directorId, genreIds, detail, movieFileName })
		} else if (currentMenu === 'genre') {
			const name = form.watch('name')
			postGenre({ name })
		}
	}

	useEffect(() => {
		if (currentMenu === 'director') {
			setFormItems(['name', 'dob', 'nationality'])
		} else if (currentMenu === 'movie') {
			setFormItems(['title', 'director', 'genre', 'movieFile'])
		} else if (currentMenu === 'genre') {
			setFormItems(['name'])
		}
	}, [currentMenu])

	return (
		<Dialog>
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
					<DialogClose>
						<button className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">Add</button>
					</DialogClose>
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
