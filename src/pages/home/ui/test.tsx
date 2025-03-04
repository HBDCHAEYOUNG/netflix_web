export function Test() {
	// const take = 5

	// const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
	// 	queryKey: ['movies'],
	// 	queryFn: async ({ pageParam }) => {
	// 		const query = {
	// 			order: ['id_DESC'],
	// 			take: take,
	// 			cursor: pageParam,
	// 		}
	// 		return movie.movieControllerFindAll(query)
	// 	},
	// 	initialPageParam: undefined,
	// 	getNextPageParam: (lastPage) => {
	// 		return lastPage.count > take ? lastPage.nextCursor : undefined
	// 	},
	// })
	// console.log('data', data)
	return (
		<div className="h-screen w-full flex-col flex-center">
			{/* {status === 'pending' ? (
				<p>Loading...</p>
			) : status === 'error' ? (
				<p>Error: {error.message}</p>
			) : (
				<div className="mt-12">
					<h2 className="mb-4 common-padding Medium-Title3">Matched to you</h2>
					<Carousel opts={{ slidesToScroll: 'auto', dragFree: true }}>
						<CarouselContent className="px-14">
							{data.pages.flatMap((page) =>
								page.data.map((movie, index) => (
									<CarouselItem key={index} className={cn('basis-1/5 cursor-pointer transition-all duration-700')}>
										<MoreinfoImg
											movieImage={
												movie.thumbnail ||
												'https://occ-0-1361-325.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABT-QluA7qJRE6WnLFefO6LrzXTCJSNDrG50CONz6Lz8DI9-z3SAValsqr6Dm3hTk0jbPYikgRMNakph2QIgZqUKybkGl8STwXZYsEwO8lrqR0LE_FMHIEvS16oJfy727U65K.jpg?r=169'
											}
											movieId={movie.id}
										/>
									</CarouselItem>
								)),
							)}
						</CarouselContent>
						<CarouselBtn
							onNext={() => fetchNextPage()}
							onPrev={() => fetchNextPage()}
							isFetchingNextPage={isFetchingNextPage}
							hasNextPage={hasNextPage}
						/>
					</Carousel>
				</div>
			)} */}
		</div>
	)
}
