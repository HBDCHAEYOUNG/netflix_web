interface HeadlineProps {
	title: string
	description?: string
}

export function Headline({ title, description }: HeadlineProps) {
	return (
		<h3 className="whitespace-pre-line Regular-Title2">
			<p className="Bold-Title1">{title}</p>
			{description}
		</h3>
	)
}
