import plugin from 'tailwindcss/plugin';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';


/** @type {import('tailwindcss').Config} */
export default {
	content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-custom":
					"linear-gradient(to right, #A14FFF, #651CD2)",
			},
			borderWidth: {
				1: "1px",
			},
			colors: {
				redCustom: "#DC3222",
				paleGray:"#F2F2F2",
				lightGray: "#D9D9D9",
				darkGray: "#666666",
				lightPurple: "#A250FF",
				darkPurple: "#651CD2",
			},
			spacing: {
				header: "66px",
				headerLearning:"54px",
				contentLearning:"calc(100vh - 54px)",
			},
			boxShadow: {
				custom: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".transitionLow": {
					transition: "all 0.8s ease-in-out",
				},
				".transitionMedium": {
					transition: "all 0.5s ease-in-out",
				},
				".transitionHight": {
					transition: "all 0.3s ease-in-out",
				},
				".flexCenter": {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				},
				".flex-y-between": {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				},
			});
		}),
		aspectRatioPlugin,
	],
};
