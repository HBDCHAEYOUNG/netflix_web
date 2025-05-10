import { Recommendations } from '@features/detail/ui/recommendations'
import ButtonPlay from '@features/video/ui/button-play'
import CircleCheck from '@icons/checkmark.svg?react'
import HdIcon from '@icons/hd.svg?react'
import CirclePlus from '@icons/plus-thin.svg?react'
import ThumbsDown from '@icons/thumb-down.svg?react'
import ThumbsUpFill from '@icons/thumb-up-fill.svg?react'
import ThumbsUp from '@icons/thumb-up.svg?react'
import { cn } from '@lib/utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFetchMovie, usePostDislikeMovie, usePostLikeMovie, usePostWishlist } from 'src/shared/models'

interface DetailProps {
	movieId: number
}

export function Detail({ movieId }: DetailProps) {
	const [show, setShow] = useState(false)

	const { data } = useFetchMovie(movieId)
	const { mutateAsync: postWishlist } = usePostWishlist()
	const { mutateAsync: postLike } = usePostLikeMovie()
	const { mutateAsync: postDislike } = usePostDislikeMovie()

	const handleClickWish = async () => {
		try {
			await postWishlist(movieId)
		} catch (error) {
			console.log(error)
		}
	}

	const handleClickLike = async () => {
		try {
			await postLike(movieId)
		} catch (error) {
			console.log(error)
		}
	}

	const handleClickDislike = async () => {
		try {
			await postDislike(movieId)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<div className="fixed left-1/2 top-1/2 z-50 h-[calc(100vh-40px)] w-[850px] -translate-x-1/2 -translate-y-1/2 overflow-y-scroll rounded-md bg-Grey/Grey-850 pb-40 no-scrollbar [&_*]:text-Primary/White">
			<img
				src={(data as any)?.thumbnail}
				alt={data?.title}
				className="mask-linear-gradient absolute left-0 top-0 z-0 aspect-video w-full object-cover"
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
						{data?.wishList && data?.wishList?.length > 0 ? (
							<CircleCheck
								className="relative z-10 h-10 w-10 cursor-pointer rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
								onClick={handleClickWish}
							/>
						) : (
							<CirclePlus
								onClick={handleClickWish}
								className="relative z-10 h-10 w-10 cursor-pointer rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
							/>
						)}
					</div>

					{(data as any)?.likedUsers?.[0]?.isLike === true && (
						<ThumbsUpFill
							onMouseEnter={() => setShow(true)}
							className="z-10 h-10 w-10 rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
						/>
					)}
					{data?.likedUsers?.length === 0 && (
						<ThumbsUp
							onMouseEnter={() => setShow(true)}
							className="z-10 h-10 w-10 rounded-full border-2 border-Grey/Grey-200 p-1 hover:border-Primary/White hover:bg-Grey/Grey-200"
						/>
					)}
					{(data as any)?.likedUsers?.[0]?.isLike === false && (
						<ThumbsUpFill
							onMouseEnter={() => setShow(true)}
							className="z-10 h-10 w-10 rotate-180 rounded-full border-2 border-Grey/Grey-200 p-2 hover:border-Primary/White hover:bg-Grey/Grey-200"
						/>
					)}

					<div
						onMouseLeave={() => setShow(false)}
						className={cn(
							'absolute left-48 z-0 flex h-11 w-24 scale-50 items-center justify-evenly rounded-full transition-all duration-500 [&_path]:fill-transparent',
							show && 'z-20 scale-100 bg-Grey/Grey-700 [&_path]:fill-Primary/White',
						)}
					>
						{(data as any)?.likedUsers?.[0]?.isLike === true ? (
							<ThumbsUpFill
								onClick={handleClickLike}
								className={cn('h-8 w-8 rounded-full p-1', show && 'hover:bg-Grey/Grey-150')}
							/>
						) : (
							<ThumbsUp
								onClick={handleClickLike}
								className={cn('h-8 w-8 rounded-full', show && 'hover:bg-Grey/Grey-150')}
							/>
						)}
						{(data as any)?.likedUsers?.[0]?.isLike === false ? (
							<ThumbsUpFill
								onClick={handleClickDislike}
								className={cn('h-8 w-8 rotate-180 rounded-full p-1', show && 'hover:bg-Grey/Grey-150')}
							/>
						) : (
							<ThumbsDown
								onClick={handleClickDislike}
								className={cn('h-8 w-8 rounded-full', show && 'hover:bg-Grey/Grey-150')}
							/>
						)}
					</div>
				</nav>
			</div>

			<div className="flex px-12">
				<div className="flex-[6]">
					<p className="flex items-baseline gap-2">
						{(data as any)?.createdAt.slice(0, 4)}
						<HdIcon />
					</p>
					{data?.detail.detail}
				</div>
				<div className="flex-[4]">
					<p>director : {data?.director.name}</p>
					<p className="!text-Grey/Grey-50">
						genre :{' '}
						{data?.genres.map((genre: any, index: number) => (
							<Link
								to={`/genre?genre=${genre.name}`}
								key={index}
								className="cursor-pointer whitespace-pre-wrap break-all"
							>
								{genre.name}
								{index < data.genres.length - 1 ? ', ' : ''}
							</Link>
						))}
					</p>
				</div>
			</div>

			{data && <Recommendations movieId={data.id} />}
		</div>
	)
}
