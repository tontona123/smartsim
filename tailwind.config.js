import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
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
				}, attention: {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
					'20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
				},
				'warningAttention': {
					/* Initial state */
					'0%, 100%': {
						transform: 'translateX(0)',
						backgroundColor: 'initial'
					},
					
					/* First shake sequence with red flash */
					'10%': { transform: 'translateX(-3px)', backgroundColor: 'rgba(255, 0, 0, 0.3)' },
					'15%': { transform: 'translateX(3px)', backgroundColor: 'rgba(255, 0, 0, 0.5)' },
					'20%': { transform: 'translateX(-3px)', backgroundColor: 'rgba(255, 0, 0, 0.7)' },
					'25%': { transform: 'translateX(3px)', backgroundColor: 'rgba(255, 0, 0, 0.5)' },
					'30%': { transform: 'translateX(0)', backgroundColor: 'rgba(255, 0, 0, 0.3)' },
					
					/* Pause */
					'31%, 49%': {
						transform: 'translateX(0)',
						backgroundColor: 'initial'
					},
					
					/* Second shake sequence with red flash */
					'50%': { transform: 'translateX(-3px)', backgroundColor: 'rgba(255, 0, 0, 0.3)' },
					'55%': { transform: 'translateX(3px)', backgroundColor: 'rgba(255, 0, 0, 0.5)' },
					'60%': { transform: 'translateX(-3px)', backgroundColor: 'rgba(255, 0, 0, 0.7)' },
					'65%': { transform: 'translateX(3px)', backgroundColor: 'rgba(255, 0, 0, 0.5)' },
					'70%': { transform: 'translateX(0)', backgroundColor: 'rgba(255, 0, 0, 0.3)' },
					
					/* Long pause before repeating */
					'71%, 99%': {
						transform: 'translateX(0)',
						backgroundColor: 'initial'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'attention': 'attention 10.0s ease-in-out infinite',
				'warning-attention': 'warningAttention 4s ease-in-out infinite',

			}
		}
	},
	safelist: [
		'text-sky-600',
		'text-emerald-600',
		'text-yellow-600',
		'text-red-600',
		'text-rose-600',
		'text-amber-600',
		'text-slate-600',
		'text-black-600',
		'border-sky-200',
		'border-emerald-200',
		'border-yellow-200',

		'border-red-200',
		'border-rose-200',
		'border-amber-200',
		'border-slate-200',
		'border-black-200',

		'bg-sky-200',
		'bg-emerald-200',
		'bg-yellow-200',
		'bg-red-200',
		'bg-rose-200',
		'bg-amber-200',
		'bg-slate-200',
		'bg-black-200',
	],
	plugins: [tailwindcssAnimate],
}

