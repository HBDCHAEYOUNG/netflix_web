import post from '@images/movie.png'
import title from '@images/movie-title-small.png'

import Button from '@ui/button/button'
import Play from '@icons/play.svg?react'
import TvMa from '@icons/tv-ma.svg?react'
import Hd from '@icons/hd.svg?react'
const movie = {
	image: post,
	title: title,
	description:
		'The Super Mario Bros. Movie is an upcoming American computer-animated action-adventure comedy film produced by Illumination and distributed by Universal Pictures.',
	duration: '1 hours 30 minutes',
	genre: 'Action, Adventure, Comedy',
	cast: 'Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black',
	etc: 'Exciting, Thrilling, Heartwarming, Family-friendly',
	releaseDate: '2023-04-05',
	rating: 'tv-ma',
	season: 3,
	videoQuality: 'hd',
}

export function Test() {
	return (
		<div>
			<div className="relative w-[850px] bg-Grey/Grey-850">
				<img
					src={movie.image}
					alt={movie.title}
					className="mask-linear-gradient absolute left-0 top-0 z-0 w-full"
					style={{
						maskImage: 'linear-gradient(to bottom, black, transparent)',
						WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
					}}
				/>

				<div className="relative h-[480px] w-[850px] place-content-end px-12 pb-16">
					<img src={movie.title} alt={movie.title} />

					<nav>
						<Button theme="white" className="mt-6 h-[43px] w-[119px] gap-2 flex-center Medium-Body">
							<Play className="[&>path]:fill-black" />
							Play
						</Button>
						{/* 아이콘 추가 */}
					</nav>
				</div>

				<div className="px-12">
					<div className="flex">
						<div>
							<p className="flex items-center gap-2 text-Grey/Grey-50">
								{movie.season} Seasons {movie.releaseDate.slice(0, 4)}
								{movie.videoQuality === 'hd' && <Hd />}
							</p>
							{movie.rating === 'tv-ma' && <TvMa />}
							<span className="mt-6 block Medium-Body">{movie.description}</span>
						</div>

						<p>
							cast : {movie.cast}
							genre : {movie.genre}
							etc : {movie.etc}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
