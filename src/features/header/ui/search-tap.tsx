import Form from '@ui/form/form'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SearchIcon from '@icons/search.svg?react'
import Close from '@icons/cross.svg?react'

export function SearchTap() {
	const [isSearch, setIsSearch] = useState(false)

	const form = useForm()
	const navigate = useNavigate()

	const inputRef = useRef<HTMLInputElement>(null)

	const onSubmitSearch = () => {
		if (form.watch('keyword').trim() === '') return
		const value = form.watch('keyword')
		navigate(`/search?keyword=${value}`)
	}

	const onClickClose = () => {
		navigate('/')
		setIsSearch(false)
	}
	return (
		<div className="ml-auto">
			{isSearch ? (
				<Form form={form} onSubmit={onSubmitSearch} className="relative flex-center">
					<Form.Item name="keyword">
						<input
							ref={inputRef}
							name="keyword"
							placeholder="Title, people, genres"
							className="h-[38px] w-[250px] rounded-none border !border-Primary/White bg-TransparentBlack/30% px-4 text-Primary/White !outline-none"
							onBlur={() => {
								if (inputRef.current?.value !== '') return
								if (inputRef.current?.value === '') navigate('/')
								setIsSearch(false)
								inputRef.current?.blur()
							}}
						/>
					</Form.Item>
					<Close className="absolute right-2" onClick={onClickClose} />
				</Form>
			) : (
				<SearchIcon
					className="ml-auto cursor-pointer"
					onClick={() => {
						setIsSearch(true)
						setTimeout(() => {
							inputRef.current?.focus()
						}, 100)
					}}
				/>
			)}
		</div>
	)
}
