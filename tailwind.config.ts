import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		aspectRatio: { // defaults to {}
			'none': 0,
			'square': [1, 1], // or 1 / 1, or simply 1
			'16/9': [16, 9],  // or 16 / 9
			'4/3': [4, 3],    // or 4 / 3
			'21/9': [21, 9],  // or 21 / 9
    	},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'theme-primary': {
					'50': '#e6edf7',
					'100': '#b0c7e6',
					'200': '#8aacd9',
					'300': '#5486c8',
					'400': '#336ebd',
					'500': '#004aad',
					'600': '#00439d',
					'700': '#00357b',
					'800': '#00295f',
					'900': '#001f49'
				},
				'theme-secondary': {
					'50': '#fef4ef',
					'100': '#fcdccd',
					'200': '#fbcbb5',
					'300': '#f9b394',
					'400': '#f8a57f',
					'500': '#f68e5f',
					'600': '#e08156',
					'700': '#af6543',
					'800': '#874e34',
					'900': '#673c28'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
		require("tailwindcss-animate"),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	],
} satisfies Config

export default config
