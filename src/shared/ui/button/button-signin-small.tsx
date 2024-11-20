import { ButtonHTMLAttributes } from "react"

interface ButtonSignInSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

function ButtonSignInSmall({className, ...rest}:ButtonSignInSmallProps) {
	return <button   type='submit' className={"rounded-common medium-smallbody h-[32px] w-[77px] bg-Primary/Red flex-center hover:bg-Secondary/Red-200"} {...rest}>Sign In</button>
}
export default ButtonSignInSmall
