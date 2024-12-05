interface ScreensPreviewProps {
	frame: string
	screenshot: string
}

export function ScreensPreview({ frame, screenshot }: ScreensPreviewProps) {
	return (
		<div className="relative">
			<img src={frame} alt="tv" />
			<img src={screenshot} alt="screenshot1" className="absolute left-[71.22px] top-[85.24px]" />
		</div>
	)
}
