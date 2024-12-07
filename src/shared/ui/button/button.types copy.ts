import { HTMLAttributes, ReactNode } from 'react'

export type PrimaryButtonTheme = 'primary' | 'outline' | 'secondary'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	theme?: PrimaryButtonTheme
	className?: string
	leftIcon?: ReactNode
	rightIcon?: ReactNode
}
