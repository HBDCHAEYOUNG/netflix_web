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
			<DialogContent className="!max-w-[600px] bg-Primary/White pb-10 [&_*]:text-Primary/Black">
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
					<DialogClose>
						<button className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">Add</button>
					</DialogClose>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
