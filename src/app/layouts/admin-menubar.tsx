import Category from '@icons/category.svg?react'
import Director from '@icons/director.svg?react'
import Movie from '@icons/movie.svg?react'
import User from '@icons/user.svg?react'
import { cn } from '@lib/utils'
import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'
import { useNavigate, useSearchParams } from 'react-router-dom'

export function AdminMenubar() {
	const navigate = useNavigate()
	const [searchParams] = useSearchParams()
	const currentMenu = searchParams.toString().replace('=', '')

	return (
		<div className="fixed left-0 top-14 h-screen w-72 bg-Primary/White pt-5 shadow-lg">
			<Menubar type="multiple">
				<MenubarItem value="a">
					<MenubarTrigger>
						<Movie className="w-8 pr-2" />
						Media
					</MenubarTrigger>
					<MenubarContent
						onClick={() => {
							navigate(`/admin?${'movie'}`)
						}}
						className={cn(currentMenu === 'movie' && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
					>
						Movie
					</MenubarContent>
					<MenubarContent
						onClick={() => {
							navigate(`/admin?${'series'}`)
						}}
						className={cn(currentMenu === 'series' && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
					>
						Series
					</MenubarContent>
				</MenubarItem>
				<MenubarItem value="b">
					<MenubarTrigger
						showPlus={false}
						onClick={() => {
							navigate(`/admin?${'director'}`)
						}}
						className={cn(currentMenu === 'director' && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
					>
						<Director className="w-8 pr-2" />
						Director
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="c">
					<MenubarTrigger
						showPlus={false}
						onClick={() => {
							navigate(`/admin?${'category'}`)
						}}
						className={cn(currentMenu === 'category' && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
					>
						<Category className="w-8 pr-2" />
						Category
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="d">
					<MenubarTrigger
						showPlus={false}
						onClick={() => {
							navigate(`/admin?${'user'}`)
						}}
						className={cn(currentMenu === 'user' && 'bg-Primary/Black text-Primary/White hover:bg-Primary/Black')}
					>
						<User className="w-8 pr-2" />
						User
					</MenubarTrigger>
				</MenubarItem>
			</Menubar>
		</div>
	)
}
