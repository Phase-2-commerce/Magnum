/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
	theme: {
		extend: {
			colors: {
				primary: {
					orange: "#DB4444", 
				},
				secondary: {
					green: "#00FF66", 
				},
			},
		},
	},
	plugins: [],
};


