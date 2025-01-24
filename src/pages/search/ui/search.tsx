import { Dialog, DialogContent, DialogTrigger } from '@ui/dialog/dialog'
import { Detail } from '@widgets/home'
import { useSearchParams } from 'react-router-dom'

export function Search() {
	const [searchParams] = useSearchParams()
	const query = searchParams.get('keyword')

	// 더미 데이터 배열 생성
	const dummyData = Array(30).fill({
		imageUrl:
			'https://images.unsplash.com/photo-1705418181762-1a52ab82ddf5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		alt: '아델리펭귄',
	})

	return (
		<div className="pt-32 common-padding">
			<h2 className="text-center">"{query}" 검색결과입니다.</h2>
			<div className="grid grid-cols-5 gap-x-[6px] gap-y-10 pt-4">
				{dummyData.map((item, index) => (
					<Dialog key={index}>
						<DialogTrigger>
							<img src={item.imageUrl} alt={item.alt} className="aspect-video h-auto w-full rounded-md" />
						</DialogTrigger>
						<DialogContent>
							<Detail />
						</DialogContent>
					</Dialog>
				))}
			</div>
		</div>
	)
}
