import * as React from 'react'
import { useEffect, useRef } from 'react'

import { cn } from '@lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	icon?: React.ReactNode
	defaultFocused?: boolean
}

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, defaultFocused = false, ...props }, ref) => {
		const [isFocused, setIsFocused] = React.useState(defaultFocused)
		const inputRef = useRef<HTMLDivElement>(null)

		useEffect(() => {
			const handleClickOutside = (event: MouseEvent) => {
				if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
					const inputElement = inputRef.current.querySelector('input')
					if (!inputElement?.value) {
						setIsFocused(false)
					}
				}
			}

			document.addEventListener('mousedown', handleClickOutside)
			return () => {
				document.removeEventListener('mousedown', handleClickOutside)
			}
		}, [])
		return (
			<fieldset className="relative">
				{(isFocused || props.value) && (
					<label className="absolute left-3 top-2 text-left text-xs text-Grey/Grey-50">{label}</label>
				)}
				<input
					placeholder={label}
					type={type}
					onFocus={() => setIsFocused(true)}
					className={cn(
						'h-14 w-full rounded-md border border-[#808080] bg-Primary/Black px-3 text-Grey/Grey-50 focus:outline-none',
						(isFocused || props.value) && 'pt-4',
						className,
					)}
					ref={ref}
					{...props}
				/>
			</fieldset>
		)
	},
)

InputText.displayName = 'InputText'
