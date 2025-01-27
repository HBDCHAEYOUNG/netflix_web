import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/index'

export function Admine() {
	return (
		<div className="mx-auto max-w-base">
			<div className="min-h-screen w-80 border border-Primary/Black">
				<Accordion type="single" collapsible className="mx-auto mt-6 w-full max-w-base">
					<AccordionItem value="a" className="mb-2 w-full">
						<AccordionTrigger>a</AccordionTrigger>
						<AccordionContent>1</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	)
}
