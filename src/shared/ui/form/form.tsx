import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { FieldValues, UseFormProps, UseFormReturn, useFormContext } from 'react-hook-form'

import { cn } from '@lib/utils'

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem as FormGroup,
	FormLabel,
	FormMessage,
	Form as FormProvider,
} from '@ui/_shardcn/form'

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
	form: UseFormReturn<T> // * form
	children: ReactNode | ReactNode[]
	onSubmit: (values: T) => void // * 폼 제출을 처리하는 함수
	className?: string // form css 스타일
}

interface FormItemProps extends HTMLAttributes<HTMLDivElement> {
	name: string // * 폼 필드의 이름
	description?: string // 폼 아이템에 대한 설명
	label?: string // 폼 아이템의 레이블
	className?: string // 폼 아이템 css 스타일
	labelClassName?: string // 레이블 css 스타일
	descriptionClassName?: string // 설명 css 스타일
	errorClassName?: string // 에러 메시지 css 스타일
	require?: boolean // 필수 css
	renderItem?: (field: any) => ReactNode // 폼 아이템 렌더링 함수
}

const FormItem = (props: FormItemProps) => {
	const { control } = useFormContext()
	const { renderItem, name, label, require, className, labelClassName, description, descriptionClassName, errorClassName, ...rest } = props

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormGroup className={className} {...rest}>
					{label && (
						<FormLabel className={cn('text-black', labelClassName)}>
							{label} {require && <span className="text-Error">*</span>}
						</FormLabel>
					)}
					{description && <FormDescription className={`text-xs text-gray-400 ${descriptionClassName}`}>{description}</FormDescription>}
					<FormControl>{renderItem && renderItem(field)}</FormControl>
					<FormMessage className={errorClassName} />
				</FormGroup>
			)}
		/>
	)
}

Form.Item = FormItem

function Form<T extends FieldValues>(props: PropsWithChildren<FormProps<T>>) {
	const { form, onSubmit, className, children, ...rest } = props

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={className} {...rest}>
				{children}
			</form>
		</FormProvider>
	)
}

FormItem.displayName = 'FormItem'

export default Form
