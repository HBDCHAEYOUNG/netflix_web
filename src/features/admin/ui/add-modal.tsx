import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@ui/dialog/dialog'
import Form from '@ui/form/form'
import { InputText } from '@ui/input/input-text'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { usePostVideo } from 'src/shared/models/video.model'

interface AddModalProps {
	currentMenu: string
	formItems: string[]
	mutateAsync: (data: any) => void
}

export function AddModal({ currentMenu, formItems, mutateAsync }: AddModalProps) {
	const form = useForm()

	const [open, setOpen] = useState(false)

	const { mutateAsync: postVideo } = usePostVideo()

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			try {
				const video = await postVideo({ video: file })
				form.setValue('movieFileName', video.fileName.toString())
			} catch (error) {
				console.error('Upload error:', error)
			}
		}
	}
	const onSubmitAdd = async () => {
		try {
			await mutateAsync(form.getValues())
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
					{currentMenu === 'movie' && (
						<>
							<div className="mb-4 rounded-md border border-Grey/Grey-20 px-3 py-2">
								<label className="text-xs">동영상 파일</label>
								<input type="file" onChange={handleFileChange} />
							</div>
							<Form.Item name="movieFileName" className="hidden">
								<InputText />
							</Form.Item>
							<Form.Item name="thumbnail">
								<InputText label="thumbnail" className="border-Grey/Grey-20 bg-transparent" />
							</Form.Item>
							<Form.Item name="detail">
								<textarea
									{...form.register('detail')}
									id="detail"
									className="min-h-60 w-full rounded-md border border-Grey/Grey-20 p-4 focus:outline-black"
									placeholder={`게시글 내용을 작성해 주세요. (판매금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는`}
								/>
							</Form.Item>
						</>
					)}
					<button type="submit" className="mt-8 w-full rounded-md bg-Primary/Red py-4 font-bold !text-Primary/White">
						Add
					</button>
				</Form>
			</DialogContent>
		</Dialog>
	)
}
