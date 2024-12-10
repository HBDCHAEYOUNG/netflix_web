import { HTMLAttributes, ReactNode } from 'react'

export type PrimaryButtonTheme = 'primary' | 'outline' | 'secondary' | 'transparent' | 'white'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	theme?: PrimaryButtonTheme
	className?: string
	leftIcon?: ReactNode
	rightIcon?: ReactNode
}
