import popcorn from '@images/popcorn.png'
import Icon from '@icons/arrow-right.svg?react'
import { Link } from 'react-router-dom'

export function Banner() {
	return (
		<div className="absolute left-1/2 top-[-72px] h-[144px] w-[1292px] -translate-x-1/2 gap-8 rounded-md flex-center gradient1">
			<img src={popcorn} alt="popcorn" className="opacity-75" />
			<div>
				<p className="mb-1 Medium-Headline">The Netflix you love for just $6.99.</p>
				<p className="mb-2 Regular-Body">Get the Standard with ads plan.</p>
				<Link to="#" className="flex text-Secondary/Blue-200 underline">
					Learn more
					<Icon className="ml-4 w-4 [&>*]:stroke-Secondary/Blue-200" />
				</Link>
			</div>
		</div>
	)
}
