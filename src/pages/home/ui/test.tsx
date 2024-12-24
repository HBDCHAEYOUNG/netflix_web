import post from '@images/movie.png'
import title from '@images/movie-title.png'
import Button from '@ui/button/button'
import Play from '@icons/play.svg?react'
const movie = {
	image: post,
	title: title,
	description:
		'The Super Mario Bros. Movie is an upcoming American computer-animated action-adventure comedy film produced by Illumination and distributed by Universal Pictures.',
	duration: '1 hours 30 minutes',
	genre: 'Action, Adventure, Comedy',
	releaseDate: '2023-04-05',
	rating: '19',
}

export function Test() {
	return (
		<div>
			<div className="w-[850px]">
				<img src={movie.image} alt={movie.title} className="relative left-0 top-0 w-full" />

				<div>
					<img src={movie.title} alt={movie.title} />
					<Button theme="white" className="gap2 h-[43px] w-[119px] flex-center Medium-Body">
						<Play className="[&>path]:fill-black" />
						Play
					</Button>
				</div>
			</div>
		</div>
	)
}
