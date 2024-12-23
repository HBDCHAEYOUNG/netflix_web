import * as React from 'react'
import { useEffect, useRef } from 'react'

import { cn } from '@lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	icon?: React.ReactNode
	defaultFocused?: boolean
}

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, label, icon, defaultFocused = false, ...props }, ref) => {
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
			<div ref={inputRef}>
				{isFocused ? (
					<div
						className={cn(
							'flex h-14 w-full flex-col justify-center rounded-md border border-[#808080] bg-Primary/Black px-3 text-Grey/Grey-50 outline outline-Primary/White Medium-Caption2',
							className,
						)}
					>
						<label className="text-left text-xs text-Grey/Grey-50">{label}</label>
						<div className="flex items-center gap-2">
							{icon && <span className="flex items-center">{icon}</span>}
							<input className={cn('w-full bg-transparent Medium-Body focus:outline-none')} type={type} ref={ref} {...props} />
						</div>
					</div>
				) : (
					<input
						placeholder={label}
						type={type}
						onFocus={() => setIsFocused(true)}
						className={cn(
							'h-14 w-full rounded-md border border-[#808080] bg-Primary/Black px-3 text-Grey/Grey-50 focus:outline-none',
							className,
						)}
						ref={ref}
						{...props}
					/>
				)}
			</div>
		)
	},
)

InputText.displayName = 'InputText'
