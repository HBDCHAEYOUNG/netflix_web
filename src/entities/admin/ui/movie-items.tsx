import { cn } from '@lib/utils'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@ui/_shardcn/dropdown-menu'
import Form from '@ui/form/form'
import { Button, InputText } from '@ui/index'
import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useFetchDirectors } from 'src/shared/models'
import { useFetchGenres } from 'src/shared/models/genre.model'
import { usePostVideo } from 'src/shared/models/video.model'

type Checked = DropdownMenuCheckboxItemProps['checked']
interface ViewState {
	[key: number]: Checked
}

export function MovieItems({ form }: { form: UseFormReturn }) {
	const { data: Genres } = useFetchGenres(1, 20)
	const { data: Directors } = useFetchDirectors(1, 20)
	const { mutateAsync: postVideo } = usePostVideo()

	const [genreViews, setGenreViews] = React.useState<ViewState>({
		1: false,
	})

	const updateGenreView = (key: keyof ViewState) => (value: Checked) => {
		setGenreViews((prev) => ({ ...prev, [key]: value }))
	}

	const onCheckedGenreChange = (key: keyof ViewState) => (value: Checked) => {
		updateGenreView(key)(value)
		const updatedGenreViews = { ...genreViews, [key]: value }
		const selectedGenres: number[] = Object.keys(updatedGenreViews)
			.filter((key) => updatedGenreViews[Number(key)])
			.map((key) => parseInt(key, 10))
		form.setValue('genreIds', selectedGenres)
		console.log(selectedGenres)
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0]
		if (file) {
			try {
				const video = await postVideo({ video: file })
				form.setValue('movieFilePath', video.fileName.toString())
			} catch (error) {
				console.error('Upload error:', error)
			}
		}
	}

	React.useEffect(() => {
		form.register('genreIds')
		form.register('movieFilePath')
		form.register('directorId')
		// 초기 genreIds가 있는 경우 views 상태 업데이트
		const initialGenreIds = form.getValues('genreIds')
		if (initialGenreIds?.length) {
			const initialGenreViews = { ...genreViews }
			initialGenreIds.forEach((id: number) => {
				initialGenreViews[id] = true
			})
			setGenreViews(initialGenreViews)
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
								form.watch('director') && '!text-Black absolute left-3 top-1 text-xs',
							)}
						>
							Director
						</p>
						{form.watch('director') && (
							<span className="pt-3 text-base">
								{Directors?.data.find((d) => d.id === form.watch('director'))?.name}
							</span>
						)}
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="bg-Primary/White">
					<DropdownMenuLabel>Director</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={form.watch('director')?.toString() || ''}
						onValueChange={(value) => form.setValue('director', Number(value))}
					>
						{Directors &&
							Directors.data.map((director) => (
								<DropdownMenuRadioItem key={director.id} value={director.id.toString()}>
									{director.name}
								</DropdownMenuRadioItem>
							))}
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
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
								checked={genreViews[genre.id]}
								onCheckedChange={onCheckedGenreChange(genre.id)}
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
