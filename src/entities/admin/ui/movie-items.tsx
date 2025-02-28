import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@ui/_shardcn/dropdown-menu'
import { Button, InputText } from '@ui/index'
import { useFetchGenres } from 'src/shared/models/genre.model'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { usePostVideo } from 'src/shared/models/video.model'
import Form from '@ui/form/form'
import { UseFormReturn } from 'react-hook-form'
import { cn } from '@lib/utils'

type Checked = DropdownMenuCheckboxItemProps['checked']
interface ViewState {
	[key: number]: Checked
}

export function MovieItems({ form }: { form: UseFormReturn }) {
	const { data: Genres } = useFetchGenres(1, 20)
	const { mutateAsync: postVideo } = usePostVideo()

	const [views, setViews] = React.useState<ViewState>({
		1: false,
		2: false,
		3: false,
		4: false,
		5: false,
		6: false,
		7: false,
		8: false,
		9: false,
	})

	const updateView = (key: keyof ViewState) => (value: Checked) => {
		setViews((prev) => ({ ...prev, [key]: value }))
	}

	const onCheckedChange = (key: keyof ViewState) => (value: Checked) => {
		updateView(key)(value)
		const updatedViews = { ...views, [key]: value }
		const selectedGenres: number[] = Object.keys(updatedViews)
			.filter((key) => updatedViews[Number(key)])
			.map((key) => parseInt(key, 10))
		form.setValue('genreIds', selectedGenres)
	}

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

	React.useEffect(() => {
		form.register('genreIds')
		form.register('movieFileName')

		// 초기 genreIds가 있는 경우 views 상태 업데이트
		const initialGenreIds = form.getValues('genreIds')
		if (initialGenreIds?.length) {
			const initialViews = { ...views }
			initialGenreIds.forEach((id: number) => {
				initialViews[id] = true
			})
			setViews(initialViews)
		}
	}, [form])

	return (
		<>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" className="relative h-14 items-center justify-start border-Grey/Grey-20 px-3">
						<p
							className={cn(
								'text-base !text-Grey/Grey-150',
								form.watch('genreIds') && '!text-Black absolute left-3 top-1 text-xs',
							)}
						>
							Genre
						</p>
						{form.watch('genreIds') &&
							form.watch('genreIds').map((id: number) => {
								const genre = Genres?.data.find((g) => g.id === id)
								return genre ? (
									<span key={id} className="pt-3 text-base">
										{genre.name}
									</span>
								) : null
							})}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-Primary/White">
					<DropdownMenuLabel>Genres</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{Genres &&
						Genres.data.map((genre) => (
							<DropdownMenuCheckboxItem
								key={genre.id}
								checked={views[genre.id]}
								onCheckedChange={onCheckedChange(genre.id)}
							>
								{genre.name}
							</DropdownMenuCheckboxItem>
						))}
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="rounded-md border border-Grey/Grey-20 px-3 py-2">
				<label className="text-xs">동영상 파일</label>
				<input type="file" onChange={handleFileChange} />
			</div>

			<Form.Item name="thumbnail">
				<InputText label="thumbnail" className="border-Grey/Grey-20 bg-transparent" />
			</Form.Item>
			<Form.Item name="detail">
				<textarea
					{...form.register('detail')}
					id="detail"
					className="min-h-60 w-full rounded-md border border-Grey/Grey-20 p-4 focus:outline-black"
					placeholder="Write a brief movie summary"
				/>
			</Form.Item>
		</>
	)
}
