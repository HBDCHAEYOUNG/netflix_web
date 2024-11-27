import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@ui/_shardcn/dropdown-menu'
import Icon from '@icons/arrow-bottom.svg?react'
interface DropdownProps {
	items: string[]
}
export function Dropdown({ items, ...rest }: DropdownProps) {
	return (
		<DropdownMenu {...rest}>
			<DropdownMenuTrigger className="items-left flex min-w-[178px] items-center justify-between border px-4 py-1 text-left">
				Open
				<Icon />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="min-w-[178px]">
				{items.map((item) => (
					<DropdownMenuItem>{item}</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
