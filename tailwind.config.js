/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary/black': '#141414',
				'primary/red': 'rgb(229, 9, 20)',
				'primary/white': '#ffffff',

				'secondary/blue-100': '#0071EB',
				'secondary/green': '#46D369', //new

				'grey/grey-10': '#E5E5E5', //메뉴 글자색
				'grey/grey-50': '#BCBCBC', //input text, 650 text
				'grey/grey-100': '#B3B3B3', //footer text
				'grey/grey-200': '#808080', //border
				'grey/grey-600': '#333333', //선택된 에피소드 bg
				'grey/grey-650': '#2F2F2F', //프로그램 설명 bg
				'grey/grey-700': '#2A2A2A', //완전 큰 선, 큰 글자 배경

				'primary/red-02': '#831010',
			},
		},
	},
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				'.mobile-padding': {
					paddingLeft: '12px',
					paddingRight: '12px',
				},
				'.tablet-padding': {
					paddingLeft: '30px',
					paddingRight: '30px',
				},
				'.desktop-padding': {
					paddingLeft: '60px',
					paddingRight: '60px',
				},
				'.common-margin': {
					marginTop: '3vw',
					marginBottom: '3vw',
				},
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				},
				'.translate-center': {
					left: '50%',
					top: '50%',
					transform: 'translate(-50%, -50%)',
				},
				'.translate-x-center': {
					left: '50%',
					transform: 'translateX(-50%)',
				},
				'.translate-y-center': {
					top: '50%',
					transform: 'translateY(-50%)',
				},
				'.no-scrollbar::-webkit-scrollbar': {
					display: 'none',
				},
				'.no-scrollbar': {
					'-ms-overflow-style': 'none',
					'scrollbar-width': 'none',
				},
			})
		},
	],
}
