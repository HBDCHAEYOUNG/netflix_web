import { useEffect } from 'react'

declare global {
	interface Window {
		IMP?: {
			init: (accountId: string) => void
		}
	}
}

const usePortOne = () => {
	useEffect(() => {
		const script = document.createElement('script')
		script.src = 'https://cdn.iamport.kr/v1/iamport.js'
		script.async = true

		script.onload = () => {
			if (window.IMP) {
				window.IMP.init(import.meta.env.VITE_CUSTOMER_IDENTIFICATION_CODE)
			}
		}

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [])
}

export default usePortOne
