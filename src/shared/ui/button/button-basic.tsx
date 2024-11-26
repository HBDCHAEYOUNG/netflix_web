import { cn } from '@lib/utils'
import { ButtonBasicProps, PrimaryButtonTheme } from './button.types'

const primary = 'bg-Primary/Red hover:bg-Secondary/Red-200'
const outline = 'text-Grey/Grey-200 border border-Grey/Grey-200 hover:text-Primary/White hover:border-Primary/White'
const secondary = 'bg-TransparentWhite/20% hover:bg-TransparentWhite/15%'

const color: Record<PrimaryButtonTheme, string> = {
	primary,
	outline,
	secondary,
}

function Button({ theme = 'primary', children, className, icon, onClick, ...rest }: ButtonBasicProps) {
	const Icon = icon
	return (
		<button onClick={onClick} type="submit" className={cn('h-10 w-full rounded-md flex-center', color[theme], className)} {...rest}>
			{Icon && <Icon className="mr-3" />}
			{children}
		</button>
	)
}
export default Button
