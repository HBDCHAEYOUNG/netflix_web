import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'
import User from '@icons/user.svg?react'
import Movie from '@icons/movie.svg?react'
import Director from '@icons/director.svg?react'
import Category from '@icons/category.svg?react'

export function AdminMenubar() {
	return (
		<div className="fixed left-0 top-16 h-screen w-80 bg-Primary/White pt-5 shadow-lg">
			<Menubar type="multiple">
				<MenubarItem value="a">
					<MenubarTrigger>
						<Movie className="w-8 pr-2" />
						미디어 관리
					</MenubarTrigger>
					<MenubarContent>영화 관리</MenubarContent>
					<MenubarContent>시리즈 관리</MenubarContent>
				</MenubarItem>
				<MenubarItem value="b">
					<MenubarTrigger>
						<Director className="w-8 pr-2" />
						감독 관리
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="c">
					<MenubarTrigger>
						<Category className="w-8 pr-2" />
						카테고리 관리
					</MenubarTrigger>
				</MenubarItem>
				<MenubarItem value="d">
					<MenubarTrigger>
						<User className="w-8 pr-2" />
						유저 관리
					</MenubarTrigger>
					<MenubarContent>전체 사용자 관리</MenubarContent>
				</MenubarItem>
			</Menubar>
		</div>
	)
}
