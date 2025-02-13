import Category from '@icons/category.svg?react'
import Director from '@icons/director.svg?react'
import Movie from '@icons/movie.svg?react'
import { cn } from '@lib/utils'
import { Menubar, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'
import { useLocation, useNavigate } from 'react-router-dom'

export function AdminMenubar() {
	const navigate = useNavigate()
	const { pathname } = useLocation()
	const currentPath = pathname.split('admin/')[1]

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
							className={cn(path === currentPath && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
						>
							<Icon
								className={cn(
									path === currentPath && '[&_path]:fill-Primary/White',
									'w-8 pr-2 [&_path]:transition-[fill] [&_path]:duration-700',
								)}
							/>
							{label}
						</MenubarTrigger>
					</MenubarItem>
				))}
			</Menubar>
		</div>
	)
}
