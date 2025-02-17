/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
    	extend: {
    		colors: {
    			'Primary/Black': '#000000',
    			'Primary/Red': '#e50914',
    			'Primary/White': '#ffffff',
    			'Secondary/Red-100': '#EB3942',
    			'Secondary/Red-200': '#C11119',
    			'Secondary/Blue-100': '#0071EB',
    			'Secondary/Blue-200': '#448EF4',
    			'Secondary/Blue-300': '#54B9C5',
    			'Secondary/Yellow-100': '#DFB039',
    			'Grey/Grey-20': '#DCDCDC',
    			'Grey/Grey-25': '#D2D2D2',
    			'Grey/Grey-50': '#BCBCBC',
    			'Grey/Grey-150': '#979797',
    			'Grey/Grey-200': '#808080',
    			'Grey/Grey-250': '#777777',
    			'Grey/Grey-300T40': 'rgb(109, 109, 110, 40%)',
    			'Grey/Grey-300T70': 'rgb(109, 109, 110, 70%)',
    			'Grey/Grey-350': '#545454',
    			'Grey/Grey-400': '#414141',
    			'Grey/Grey-450': '#404040',
    			'Grey/Grey-500': '#3A3A3A',
    			'Grey/Grey-550': '#363636',
    			'Grey/Grey-600T60': 'rgb(51, 51, 51, 60%)',
    			'Grey/Grey-700': '#2A2A2A',
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
    			'TransparentBlack/90%': 'rgb(0, 0, 0, 90%)',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: '4px',
    			sm: '2px'
    		},
    		aspectRatio: {
    			'4/3': '4 / 3',
    			frame: '1440 / 700',
    			login: '1440 / 1209'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [
		({ addUtilities }) => {
			addUtilities({
				'.max-w-base': {
					maxWidth: '1200px',
				},
				'.min-w-base': {
					minWidth: '1000px',
				},
				'.max-w-wide': {
					maxWidth: '1400px',
				},
				'.common-padding': {
					paddingLeft: '56px',
					paddingRight: '56px',
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
				'.gradient1': {
					background: 'rgb(0,4,19)',
					background:
						'linear-gradient(90deg, rgba(0,4,19,0.6209077380952381) 0%, rgba(14,27,79,0.590095413165266) 25%, rgba(229,9,20,0.5956976540616247) 50%, rgba(14,27,79,0.6012998949579832) 75%, rgba(14,27,79,0.22875087535014005) 100%)',
				},
				'.gradient2': {
					background: 'rgb(29, 82, 157)',
					background: 'linear-gradient(135deg,rgba(74, 42, 150,0.7) 30%, rgba(109, 59, 227,1) 100%)',
				},
				'.gradient3': {
					background: 'rgb(29, 82, 157)',
					background: 'linear-gradient(135deg,rgba(74, 42, 150,0.7) 0%, rgba(176, 56, 220,1) 100%)',
				},
				'.gradient4': {
					background: 'rgb(14,27,79)',
					background: 'linear-gradient(135deg, rgba(14,27,79,1) 10%, rgba(229,9,20,0.7) 100%)',
				},
				'.Regular-Caption2': {
					fontFamily: 'Netflix Sans',
					fontWeight: '400',
					fontSize: '11px',
					lineHeight: '14.05px',
				},
				'.Regular-Caption1': {
					fontFamily: 'Netflix Sans',
					fontSize: '13px',
					fontWeight: '400',
					lineHeight: '16px',
					letterSpacing: '0.25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Smallbody': {
					fontFamily: 'Netflix Sans',
					fontSize: '14px',
					fontWeight: '400',
					lineHeight: '17.88px',
					letterSpacing: '-0.20000000298023224px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Body': {
					fontFamily: 'Netflix Sans',
					fontSize: '16px',
					fontWeight: '400',
					lineHeight: '20.43px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Headline': {
					fontFamily: 'Netflix Sans',
					fontSize: '18px',
					fontWeight: '400',
					lineHeight: '22px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Title4': {
					fontFamily: 'Netflix Sans',
					fontSize: '20px',
					fontWeight: '400',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Title3': {
					fontFamily: 'Netflix Sans',
					fontSize: '21px',
					fontWeight: '400',
					lineHeight: '25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Title2': {
					fontFamily: 'Netflix Sans',
					fontSize: '24px',
					fontWeight: '400',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-Title1': {
					fontFamily: 'Netflix Sans',
					fontSize: '27px',
					fontWeight: '400',
					lineHeight: '36px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Regular-LargeTitle': {
					fontFamily: 'Netflix Sans',
					fontSize: '50px',
					fontWeight: '400',
					lineHeight: '63.85px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Caption': {
					fontFamily: 'Netflix Sans',
					fontSize: '12px',
					fontWeight: '500',
					lineHeight: '15.32px',
					letterSpacing: '-0.25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Caption2': {
					fontFamily: 'Netflix Sans',
					fontSize: '12px',
					fontWeight: '500',
					lineHeight: '15.32px',
					letterSpacing: '-0.25px',
					textAlign: 'center',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Smallbody': {
					fontFamily: 'Netflix Sans',
					fontSize: '14px',
					fontWeight: '500',
					lineHeight: '17.88px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Body': {
					fontFamily: 'Netflix Sans',
					fontSize: '16px',
					fontWeight: '500',
					lineHeight: '24px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Headline': {
					fontFamily: 'Netflix Sans',
					fontSize: '21px',
					fontWeight: '500',
					lineHeight: '25px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Title3': {
					fontFamily: 'Netflix Sans',
					fontSize: '24px',
					fontWeight: '500',
					lineHeight: '30.65px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Title2': {
					fontFamily: 'Netflix Sans',
					fontSize: '28px',
					fontWeight: '500',
					lineHeight: '45px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-Title1': {
					fontFamily: 'Netflix Sans',
					fontSize: '30px',
					fontWeight: '500',
					lineHeight: '45px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Medium-LargeTitle': {
					fontFamily: 'Netflix Sans',
					fontSize: '33px',
					fontWeight: '500',
					lineHeight: '42.14px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Bold-Title2': {
					fontFamily: 'Netflix Sans',
					fontSize: '32px',
					fontWeight: '700',
					lineHeight: '30px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Bold-Title1': {
					fontFamily: 'Netflix Sans',
					fontSize: '48px',
					fontWeight: '700',
					lineHeight: '62px',
					textAlign: 'left',
					textUnderlinePosition: 'from-font',
					textDecorationSkipInk: 'none',
				},
				'.Bold-LargeTitle': {
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
		require('tailwindcss-animate'),
	],
}
