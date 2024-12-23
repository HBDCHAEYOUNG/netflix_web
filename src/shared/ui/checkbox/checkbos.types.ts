import { HTMLAttributes } from 'react'

export interface CheckboxBasicProps extends HTMLAttributes<HTMLDivElement> {
	label: string
	labelClassName?: string
}
