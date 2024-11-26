/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {

         'sm': '640px',
		 'md': '768px',
		 'lg': '1024px',
		 'xl': '1280px',
		 '2xl': '1536px',
		'desktop': '1700px',
		// => @media (min-width: 1280px) { ... }
	  },
    extend: {
      colors: {
		darkGray: "#D9D9D9",
		darkBlack: "#191919",
		black2: "#121212",
		gray2: "#DDDDDD",
		gray3: "#A6A6A6",
		orange: "#DA7240",
		orange2: "#FF6E28",
		gray3: "#5A5A5A",
		gray4: "#676767",
		gray5: "#ADADAD",
		gray6: "#EAEAEA",
		gray7: "#8C8C8C",
		black3: "#464646",
		black4: "#232323",

      },
	  fontFamily: {
        ptSans: ['var(--font-pt-sans)'],
		pattaya: ['var(--font-pattaya)']
      },
	  boxShadow: {
        headerShadow: '24px 0px 24px rgba(0, 0, 0, 0.12)',
		footerShadow: '-10px -10px 20px rgba(0, 0, 0, 0.12)'
      },
    },
  },
  plugins: [],
};
