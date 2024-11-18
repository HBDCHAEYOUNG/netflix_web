/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary/black': '#141414',
				'primary/red': 'rgb(229, 9, 20)',
				'primary/white': '#ffffff',

				'secondary/red-300': '#F50723', //동영상 재생 바
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
				//typography
				'.regular-caption2': {
					fontFamily: 'Netflix Sans',
					fontWeight: '400',
					fontSize: '11px',
					lineHeight: '14.05px',
				},
				'.regular-caption1': {
					fontfamily: 'Netflix Sans',
					fontSize: '13px',
					fontWeight: '400',
					lineHeight: '16px',
					letterSpacing: '0.25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.regular-smallbody': {
					fontFamily: 'Netflix Sans',
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '17.88px',
					letterSpacing: '-0.20000000298023224px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-body': {
					fontFamily: 'Netflix Sans',
					fontSize: '16px',
					fontWeight: '400',
					lineHeight: '20.43px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-headline': {
					fontFamily: 'Netflix Sans',
					fontSize: '18px',
					fontWeight: '400',
					lineHeight: '22px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-title4': {
					fontFamily: 'Netflix Sans',
					fontSize: '20px',
					fontWeight: '400',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-title3': {
					fontFamily: 'Netflix Sans',
					fontSize: '21px',
					fontWeight: '400',
					lineHeight: '25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-title2': {
					fontFamily: 'Netflix Sans',
					fontSize: '24px',
					fontWeight: '400',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-title1': {
					//styleName: Regular/Title1;
					fontFamily: 'Netflix Sans',
					fontSize: '27px',
					fontWeight: '400',
					lineHeight: '36px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'regular-largetitle': {
					fontfamily: 'Netflix Sans',
					fontsize: '50px;',
					fontWeight: '400',
					lineHeight: '63.85px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				//medium
				'medium-caption': {
					//styleName: Medium/Caption2;
					fontFamily: 'Netflix Sans',
					fontSize: '12px',
					fontWeight: '500',
					lineHeight: '15.32px',
					letterSpacing: '-0.25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-smallbody': {
					//styleName: Medium/SmallBody;
					fontFamily: 'Netflix Sans',
					fontSize: '14px',
					fontWeight: '500',
					lineHeight: '17.88px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-body': {
					//styleName: Medium/Body;
					fontFamily: 'Netflix Sans',
					fontSize: '16px',
					fontWeight: '500',
					lineHeight: '24px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-headline': {
					//styleName: Medium/Headline1;
					fontFamily: 'Netflix Sans',
					fontSize: '21px',
					fontWeight: '500',
					lineHeight: '25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-title3': {
					//styleName: Medium/Title3;
					fontFamily: 'Netflix Sans',
					fontSize: '24px',
					fontWeight: '500',
					lineHeight: '30.65px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-title2': {
					//styleName: Medium/Title2;
					fontFamily: 'Netflix Sans',
					fontSize: '28px',
					fontWeight: '500',
					lineHeight: '45px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-title1': {
					//styleName: Medium/Title1;
					fontFamily: 'Netflix Sans',
					fontSize: '30px',
					fontWeight: '500',
					lineHeight: '45px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'medium-largetitle': {
					//styleName: Medium/LargeTitle;
					fontFamily: 'Netflix Sans',
					fontSize: '33px',
					fontWeight: '500',
					lineHeight: '42.14px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'bold-title2': {
					//styleName: Bold/Title2;
					fontFamily: 'Netflix Sans',
					fontSize: '20px',
					fontWeight: '700',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'bold-title1': {
					//styleName: Bold/Title1;
					fontFamily: 'Netflix Sans',
					fontSize: '48px',
					fontWeight: '700',
					lineHeight: '62px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'bold-largetitle': {
					//styleName: Bold/LargeTitle;
					fontFamily: 'Netflix Sans',
					fontSize: '55px',
					fontWeight: '700',
					lineHeight: '70.23px',
					letterSpacing: '-1px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
			})
		},
	],
}
