import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'outline' | 'secondary'
}

function Button({ variant = 'primary', ...rest}:ButtonProps) {
	const themeClass = variant === 'primary' ? 
		'bg-Primary/Red hover:bg-Secondary/Red-200' : 
		variant === 'outline' ? 'text-Grey/Grey-200 border border-Grey/Grey-200 hover:bg-Grey/Grey-10' :
		'bg-TransparentWhite/20% hover:bg-Secondary/Red-300'

	return <button type='submit' className={`h-10 rounded-md w-full flex-center ${themeClass}`} {...rest}>Sign In</button>
}
export default Button
