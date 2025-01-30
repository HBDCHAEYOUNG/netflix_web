import Category from '@icons/category.svg?react'
import Director from '@icons/director.svg?react'
import Movie from '@icons/movie.svg?react'
import User from '@icons/user.svg?react'
import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'
import { useNavigate } from 'react-router-dom'

export function AdminMenubar() {
	const navigate = useNavigate()

	return (
		<div className="fixed left-0 top-14 h-screen w-80 bg-Primary/White pt-5 shadow-lg">
			<Menubar type="multiple">
				<MenubarItem value="a">
					<MenubarTrigger>
						<Movie className="w-8 pr-2" />
						미디어 관리
					</MenubarTrigger>
					<MenubarContent onClick={() => navigate(`/admin?${'movie'}`)}>영화 관리</MenubarContent>
					<MenubarContent onClick={() => navigate(`/admin?${'series'}`)}>시리즈 관리</MenubarContent>
				</MenubarItem>
				<MenubarItem value="b">
					<MenubarTrigger showPlus={false} onClick={() => navigate(`/admin?${'director'}`)}>
						<Director className="w-8 pr-2" />
						감독 관리
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="c">
					<MenubarTrigger showPlus={false} onClick={() => navigate(`/admin?${'category'}`)}>
						<Category className="w-8 pr-2" />
						카테고리 관리
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="d">
					<MenubarTrigger>
						<User className="w-8 pr-2" />
						유저 관리
					</MenubarTrigger>
					<MenubarContent onClick={() => navigate(`/admin?${'user'}`)}>전체 사용자 관리</MenubarContent>
				</MenubarItem>
			</Menubar>
		</div>
	)
}
