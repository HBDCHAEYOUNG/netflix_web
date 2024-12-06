interface HeadlineProps {
	title: string
	description?: string
}

export function Headline({ title, description }: HeadlineProps) {
	return (
		<p className="whitespace-pre-line Regular-Title2">
			<h3 className="Bold-Title1">{title}</h3>
			{description}
		</p>
	)
}
