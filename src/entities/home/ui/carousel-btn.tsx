import { CarouselNext, CarouselPrevious } from '@ui/index'

export function CarouselBtn() {
	return (
		<div>
			<CarouselPrevious className="absolute left-0 top-1/2 z-10 h-full w-[4vw] -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
			<CarouselNext className="absolute right-0 top-1/2 h-full w-14 -translate-y-1/2 cursor-pointer hover:scale-150 hover:bg-black/50" />
		</div>
	)
}
