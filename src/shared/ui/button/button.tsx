import { cn } from '@lib/utils'
import { PropsWithChildren } from 'react'
import { ButtonProps, PrimaryButtonTheme } from './button.types copy'

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

function Button({ theme = 'primary', children, className, leftIcon, rightIcon, ...rest }: PropsWithChildren<ButtonProps>) {
	const classes = cn('h-10 w-full rounded-md flex-center', color[theme], className)

	return (
		<button className={classes} {...rest}>
			{leftIcon && leftIcon}
			{children}
			{rightIcon && rightIcon}
		</button>
	)
}

export default Button
