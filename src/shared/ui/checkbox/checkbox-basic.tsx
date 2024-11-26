import { Checkbox } from '@ui/_shardcn/checkbox'
import { CheckboxBasicProps } from './checkbos.types'
import { useId } from 'react'

export function CheckboxBasic({ label, ...rest }: CheckboxBasicProps) {
	const id = useId()
	return (
		<div className="items-top flex space-x-2" {...rest}>
			<Checkbox id={id} />
			<div className="grid gap-1.5 leading-none">
				<label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					{label}
				</label>
			</div>
		</div>
	)
}
