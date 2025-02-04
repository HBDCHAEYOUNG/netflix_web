import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useForm } from 'react-hook-form'

interface AddProps {
	setData: React.Dispatch<React.SetStateAction<any[]>>
}

export function Add({ setData }: AddProps) {
	const form = useForm()

	return (
		<Dialog>
			<DialogTrigger className="absolute right-10 top-[84px]">
				<button className="rounded-lg border border-Grey/Grey-20 bg-Primary/White px-3 py-1 !text-Primary/Black">Add</button>
			</DialogTrigger>
			<DialogContent className="!max-w-[600px] bg-Primary/White px-28 pb-10 [&_*]:text-Primary/Black">
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
					</div>
					<Form.Item name="title">
						<InputText label="Title" className="border-Grey/Grey-20 bg-transparent" />
					</Form.Item>
					<Form.Item name="director">
						<InputText label="Director" className="border-Grey/Grey-20 bg-transparent" />
					</Form.Item>
					<Form.Item name="date">
						<InputText label="Date" className="border-Grey/Grey-20 bg-transparent" />
					</Form.Item>
					<Form.Item name="description">
						<textarea
							{...form.register('description')}
							id="description"
							className="min-h-60 w-full rounded-md border border-Grey/Grey-20 p-4 focus:outline-black"
							placeholder={`게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는`}
						/>
					</Form.Item>
					<DialogClose>
						<button className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">Add</button>
					</DialogClose>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
