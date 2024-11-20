import { ButtonHTMLAttributes, ComponentProps } from 'react'

interface ButtonSignInSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: ComponentProps<'button'>['className']
}

function ButtonSignInSmall({ ...rest }: ButtonSignInSmallProps) {
	return (
		<button
			type="submit"
			className={'h-[32px] w-[77px] bg-Primary/Red flex-center rounded-common medium-smallbody hover:bg-Secondary/Red-200'}
			{...rest}
		>
			Sign In
		</button>
	)
}
export default ButtonSignInSmall
