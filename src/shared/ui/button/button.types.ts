import { ReactNode } from 'react'
import { HTMLAttributes } from 'react'
import { ButtonHTMLAttributes } from 'react'

export type PrimaryButtonTheme = 'primary' | 'outline' | 'secondary'

export interface ButtonBasicProps extends HTMLAttributes<HTMLButtonElement> {
	children: string | ReactNode
	theme?: PrimaryButtonTheme
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	className?: string
	icon?: React.ElementType
	onClick?: () => void
}
