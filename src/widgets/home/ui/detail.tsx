import title from '@images/movie-title-small.png'

import Button from '@ui/button/button'
import Play from '@icons/play.svg?react'
import TvMa from '@icons/tv-ma.svg?react'
import Hd from '@icons/hd.svg?react'
import { Select } from '@ui/index'
const movie = {
	image:
		'https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	title: 'The Super Mario Bros. Movie',
	titleImg: title,
	description:
		'The Super Mario Bros. Movie is an upcoming American computer-animated action-adventure comedy film produced by Illumination and distributed by Universal Pictures.',
	duration: '1 hours 30 minutes',
	genre: 'Action, Adventure, Comedy',
	director: 'Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black',
	cast: 'Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black',
	etc: 'Exciting, Thrilling, Heartwarming, Family-friendly',
	releaseDate: '2023-04-05',
	rating: 'tv-ma',
	maturity: '12',
	season: 3,
	videoQuality: 'hd',
}

export function Detail() {
	return (
		<div className="fixed left-1/2 top-1/2 z-50 my-10 h-[calc(100vh-80px)] w-[850px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md">
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
					<img src={movie.titleImg} alt={movie.title} />

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
							<span className="mt-4 block Medium-Body">{movie.description}</span>
						</div>

						<p>
							cast : {movie.cast}
							genre : {movie.genre}
							etc : {movie.etc}
						</p>
					</div>
				</div>

				<div className="flex items-center justify-between gap-2 px-12 py-6 Medium-Title3">
					회차
					<Select items={['season 1', 'season 2', 'season 3']} type="video" className="h-12 w-40 px-4 Regular-Headline" />
				</div>

				<ul className="px-12 pb-6">
					{[{ ...movie }, { ...movie }, { ...movie }].map((item, index) => (
						<li key={index} className="flex items-center gap-4 border-b border-Grey/Grey-450 py-4 pl-4 pr-12 first:bg-Grey/Grey-450">
							<p className="Regular-Title2">{index + 1}</p>
							<img src={item.image} alt={item.title} className="w-32" />
							<p className="text-Grey/Grey-25 Regular-Smallbody">
								<span className="flex justify-between pb-2 Regular-Body">
									<h3>{item.title}</h3>
									{item.duration}
								</span>
								{item.description}
							</p>
						</li>
					))}
				</ul>

				<div className="px-12 py-6 Medium-Title3">회차</div>
				<ol className="grid grid-cols-3 gap-4 px-12 pb-6">
					{[{ ...movie }, { ...movie }, { ...movie }, { ...movie }, { ...movie }, { ...movie }].map((item, index) => (
						<li key={index} className="w-60 rounded-md bg-Grey/Grey-450">
							<img src={item.image} alt={item.title} className="w-60" />
							<div className="p-3 pb-12">
								<div className="flex items-center gap-2 py-4">
									<span className="aspect-square size-9 rounded-sm bg-Secondary/Yellow-100 p-1 text-3xl font-extrabold">
										{item.maturity}
									</span>
									{item.videoQuality === 'hd' && <Hd />}
									{item.releaseDate.slice(0, 4)}
								</div>
								<p className="Regular-Body">{item.description}</p>
							</div>
						</li>
					))}
				</ol>

				<div className="px-12 py-6 Medium-Title3">About {movie.title}</div>
				<p className="px-12 pb-6 Regular-Body">
					director : {movie.director}
					cast : {movie.cast}
					genre : {movie.genre}
					etc : {movie.etc}
				</p>
			</div>
		</div>
	)
}
