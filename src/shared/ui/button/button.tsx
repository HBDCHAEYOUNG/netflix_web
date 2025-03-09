import { cn } from '@lib/utils'
import { forwardRef } from 'react'

const primary = 'bg-Primary/Red hover:bg-Secondary/Red-200'
const outline = 'text-Grey/Grey-200 border border-Grey/Grey-200 hover:text-Primary/White hover:border-Primary/White'
const secondary = 'bg-TransparentWhite/20% hover:bg-TransparentWhite/15%'
const transparent = 'bg-transparent hover:bg-TransparentWhite/15%'
const white = 'bg-Primary/White hover:opacity-80 text-Primary/Black'

const color: Record<PrimaryButtonTheme, string> = {
	primary,
	outline,
	secondary,
	transparent,
	white,
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: PrimaryButtonTheme
	children: React.ReactNode
	className?: string
	leftIcon?: React.ReactNode
	rightIcon?: React.ReactNode
	onClick?: () => void
}

type PrimaryButtonTheme = 'primary' | 'outline' | 'secondary' | 'transparent' | 'white'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ theme = 'primary', children, className, leftIcon, rightIcon, onClick, ...rest }, ref) => {
		const classes = cn('h-10 w-full rounded-md flex-center', color[theme], className)

		return (
			<button ref={ref} className={classes} onClick={onClick} {...rest}>
				{leftIcon && leftIcon}
				{children}
				{rightIcon && rightIcon}
			</button>
		)
	},
)

Button.displayName = 'Button'

export default Button
