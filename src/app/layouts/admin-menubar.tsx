import Category from '@icons/category.svg?react'
import Director from '@icons/director.svg?react'
import Movie from '@icons/movie.svg?react'
import { cn } from '@lib/utils'
import { Menubar, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function AdminMenubar() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const currentMenu = searchParams.toString().replace('=', '')

	useEffect(() => {
		if (!searchParams.toString()) {
			navigate('/admin/movie')
		}
	}, [searchParams, navigate])

	const menuItems = [
		{ value: 'a', path: 'movie', icon: Movie, label: 'Movie' },
		{ value: 'b', path: 'director', icon: Director, label: 'Director' },
		{ value: 'c', path: 'genre', icon: Category, label: 'Genre' },
	]

	return (
		<div className="fixed left-0 top-14 h-screen w-72 bg-Primary/White pt-5 shadow-lg">
			<Menubar type="multiple">
				{menuItems.map(({ value, path, icon: Icon, label }) => (
					<MenubarItem key={value} value={value}>
						<MenubarTrigger
							showPlus={false}
							onClick={() => {
								navigate(`/admin/${path}`)
							}}
							className={cn(currentMenu === path && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
						>
							<Icon className="w-8 pr-2" />
							{label}
						</MenubarTrigger>
					</MenubarItem>
				))}
			</Menubar>
		</div>
	)
}
