/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'Primary/Black': '#000000',
				'Primary/Red': 'rgb(229, 9, 20)',
				'Primary/White': '#ffffff',

				'Secondary/Red-100': '#EB3942',
				'Secondary/Red-200': '#C11119',
				'Secondary/Red-300': '#F50723', //동영상 재생 바
				'Secondary/Blue-100': '#0071EB',
				'Secondary/Blue-200': '#448EF4',
				'Secondary/Blue-300': '#54B9C5',
				'Secondary/Green': '#46D369', //new

				'Grey/Grey-10': '#E5E5E5', //메뉴 글자색
				'Grey/Grey-20': '#DCDCDC',
				'Grey/Grey-25': '#D2D2D2',
				'Grey/Grey-25': '#BCBCBC', //input text, 650 text
				'Grey/Grey-100': '#B3B3B3', //footer text
				'Grey/Grey-150': '#979797',
				'Grey/Grey-200': '#808080', //border
				'Grey/Grey-250': '#777777',
				'Grey/Grey-300T40': 'rgb(109, 109, 110, 40%)',
				'Grey/Grey-300T70': 'rgb(109, 109, 110, 70%)',
				'Grey/Grey-350': '#545454',
				'Grey/Grey-400': '#414141',
				'Grey/Grey-450': '#404040',
				'Grey/Grey-500': '#3A3A3A',
				'Grey/Grey-550': '#363636',
				'Grey/Grey-600T60': 'rgb(51, 51, 51, 60%)',
				'Grey/Grey-600': '#333333', //선택된 에피소드 bg
				'Grey/Grey-650': '#2F2F2F', //프로그램 설명 bg
				'Grey/Grey-700': '#2A2A2A', //완전 큰 선, 큰 글자 배경
				'Grey/Grey-750': '#262626',
				'Grey/Grey-800': '#232323',
				'Grey/Grey-850': '#181818',
				'Grey/Grey-900': '#141414',

				'TransparentWhite/15%': 'rgb(255, 255, 255, 15%)',
				'TransparentWhite/20%': 'rgb(255, 255, 255, 20%)',
				'TransparentWhite/30%': 'rgb(255, 255, 255, 30%)',
				'TransparentWhite/35%': 'rgb(255, 255, 255, 35%)',
				'TransparentWhite/50%': 'rgb(255, 255, 255, 50%)',
				'TransparentWhite/70%': 'rgb(255, 255, 255, 70%)',

				'TransparentBlack/30%': 'rgb(0, 0, 0, 30%)',
				'TransparentBlack/60%': 'rgb(0, 0, 0, 60%)',
				'TransparentBlack/60%': 'rgb(0, 0, 0, 90%)',
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
				'.rounded-common': {
					borderRadius: '4px',
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
				'Medium/SmallBody': {
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
