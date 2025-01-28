import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from '@ui/accordion/menubar'

export function AdminMenubar() {
	return (
		<div className="mt-16 w-80">
			<Menubar type="multiple">
				<MenubarItem value="a">
					<MenubarTrigger>영화관리</MenubarTrigger>
					<MenubarContent>1</MenubarContent>
				</MenubarItem>
				<MenubarItem value="b">
					<MenubarTrigger>b</MenubarTrigger>
					<MenubarContent>2</MenubarContent>
				</MenubarItem>
			</Menubar>
		</div>
	)
}
