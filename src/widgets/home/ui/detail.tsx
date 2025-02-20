import ButtonPlay from '@features/video/ui/button-play'
import CircleCheck from '@icons/checkmark.svg?react'
import CirclePlus from '@icons/plus-thin.svg?react'
import ThumbsDown from '@icons/thumb-down.svg?react'
import ThumbsUpFill from '@icons/thumb-up-fill.svg?react'
import ThumbsUp from '@icons/thumb-up.svg?react'
import { cn } from '@lib/utils'
import { useState } from 'react'
import { useFetchMovie, usePostWishlist } from 'src/shared/models'

interface DetailProps {
	movieId: number
}

export function Detail({ movieId }: DetailProps) {
	const [isLike, setIsLike] = useState(false)
	const [isHate, setIsHate] = useState(false)
	const [show, setShow] = useState(false)
	console.log(show)
	const { data } = useFetchMovie(movieId)
	const { mutateAsync: postWishlist } = usePostWishlist()
	const handleClickWish = async () => {
		try {
			await postWishlist(movieId)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="fixed left-1/2 top-1/2 z-50 my-4 h-[calc(100vh-32px)] w-[850px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md [&_*]:text-Primary/White">
			<div className="relative w-[850px] bg-Grey/Grey-850">
				<img
					src="https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt={data?.title}
					className="mask-linear-gradient absolute left-0 top-0 z-0 w-full"
					style={{
						maskImage: 'linear-gradient(to bottom, black, transparent)',
						WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
					}}
				/>

				<div className="relative h-[480px] w-[850px] place-content-end px-12 pb-16">
					<h1 className="text-3xl font-extrabold">{data?.title}</h1>
					<nav className="mt-6 flex items-center gap-2">
						<ButtonPlay movieId={data?.id} />
						<div>
							{data?.wishlist ? (
								<CirclePlus
									className="h-10 w-10 rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
									onClick={handleClickWish}
								/>
							) : (
								<CircleCheck className="h-10 w-10 rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200" />
							)}
						</div>
						<ThumbsUp
							onMouseEnter={() => setShow(true)}
							className="z-10 h-10 w-10 rounded-full border-2 border-Grey/Grey-200 p-1 hover:border-Primary/White hover:bg-Grey/Grey-200"
						/>
						<div
							onMouseLeave={() => setShow(false)}
							className={cn(
								'absolute left-48 z-0 flex h-11 w-24 items-center justify-evenly rounded-full transition-all duration-500 [&_path]:fill-transparent',
								show && 'z-20 bg-Grey/Grey-700 [&_path]:fill-Primary/White',
							)}
						>
							{isLike ? (
								<ThumbsUpFill
									onClick={() => setIsLike(false)}
									className={cn('h-8 w-8 rounded-full p-1', show && 'hover:bg-Grey/Grey-150')}
								/>
							) : (
								<ThumbsUp
									onClick={() => {
										setIsLike(true)
										setIsHate(false)
									}}
									className={cn('h-8 w-8 rounded-full', show && 'hover:bg-Grey/Grey-150')}
								/>
							)}
							{isHate ? (
								<ThumbsUpFill
									onClick={() => {
										setIsHate(false)
									}}
									className={cn('h-8 w-8 rotate-180 rounded-full p-1', show && 'hover:bg-Grey/Grey-150')}
								/>
							) : (
								<ThumbsDown
									onClick={() => {
										setIsHate(true)
										setIsLike(false)
									}}
									className={cn('h-8 w-8 rounded-full', show && 'hover:bg-Grey/Grey-150')}
								/>
							)}
						</div>
					</nav>
				</div>

				<div className="px-12">
					<p className="!text-Grey/Grey-50">release : {data?.createdAt.slice(0, 4)}</p>
					<span className="Medium-Body">{data?.detail.detail}</span>

					<p>genre : {data?.genres.map((genre: any) => genre.name).join(', ')}</p>
				</div>

				{/* <div className="flex items-center justify-between gap-2 px-12 py-6 Medium-Title3">
					회차
					<Select items={['season 1', 'season 2', 'season 3']} type="video" className="h-12 w-40 px-4 Regular-Headline" />
				</div>

				<ul className="px-12 pb-6">
					{[{ ...movieDetail }, { ...movieDetail }, { ...movieDetail }].map((item, index) => (
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
				</ul> */}

				{/* <div className="px-12 pb-6 pt-12 Medium-Title3">회차</div>
				<ol className="grid grid-cols-3 gap-4 px-12 pb-6">
					{[{ ...movieDetail }, { ...movieDetail }, { ...movieDetail }, { ...movieDetail }, { ...movieDetail }, { ...movieDetail }].map(
						(item, index) => (
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
						),
					)}
				</ol> */}

				<div className="px-12 pb-6 pt-12 Medium-Title3">About {data?.title}</div>
				<p className="px-12 pb-6 Regular-Body">
					director : {data?.director.name}
					genre : {data?.genres.map((genre: any) => genre.name).join(', ')}
					{/* etc : {movieDetail.etc} */}
				</p>
			</div>
		</div>
	)
}
