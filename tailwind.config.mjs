/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
  	colors: {
  		dust: '#F9F9F9',
  		sand: '#E9E3DC',
  		sage: '#9DB8A8',
  		coral: '#D5573B',
  		inlet: '#4D7EA8',
  		midnight: '#272932'
  	},
  	fontFamily: {
  		altdisplay: ['Reem Kufi',  "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
  		accessdisplay: ["Bebas", "Times New Roman", "Times", "serif"],
  		accessbody: ["Carlito", "Calibri", "Tahoma", "Times New Roman", "Times", "sans-serif"],
      accessitalic: ["CarlitoItalic", "Calibri", "Tahoma", "Times New Roman", "Times", "sans-serif"],
      accessbold: ["CarlitoBold", "Calibri", "Tahoma", "Times New Roman", "Times", "sans-serif"],
  	},
  	extend: {
  		borderWidth: {
        '6': '6cqh',
  			'12': '12.5cqh',
  			'16': '16.65cqh',
  			'25': '25cqh',
  			'33': '33.3cqh',
  			'50': '50cqh',
  			'75': '75cqh',
  			'100': '100cqh',
        '100w': '100cqw'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      keyframes: {
				enterFromRight: {
					from: { opacity: "0", transform: "translateX(200px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				enterFromLeft: {
					from: { opacity: "0", transform: "translateX(-200px)" },
					to: { opacity: "1", transform: "translateX(0)" },
				},
				exitToRight: {
					from: { opacity: "1", transform: "translateX(0)" },
					to: { opacity: "0", transform: "translateX(200px)" },
				},
				exitToLeft: {
					from: { opacity: "1", transform: "translateX(0)" },
					to: { opacity: "0", transform: "translateX(-200px)" },
				},
				scaleIn: {
					from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
					to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
				},
				scaleOut: {
					from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
					to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
				},
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				fadeOut: {
					from: { opacity: "1" },
					to: { opacity: "0" },
				},
			},
		},
		animation: {
			scaleIn: "scaleIn 200ms ease-in-out",
			scaleOut: "scaleOut 200ms ease-in-out",
			fadeIn: "fadeIn 200ms ease",
			fadeOut: "fadeOut 200ms ease",
			enterFromLeft: "enterFromLeft 250ms ease",
			enterFromRight: "enterFromRight 250ms ease",
			exitToLeft: "exitToLeft 250ms ease",
			exitToRight: "exitToRight 250ms ease",
		},
  },
  // plugins: [require("tailwindcss-animate")],
}
