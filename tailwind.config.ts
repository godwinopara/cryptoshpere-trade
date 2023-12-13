import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				pattern: "url('/images/background-pattern.svg')",
				pattern2: "url('/images/pattern-2.png')",
				greenpatten: "url('/images/green-pattern.png')",
				pattern3: "url('/images/pattern-3.webp')",
			},
			fontSize: {
				46: "2.875rem",
				90: "4rem",
			},
			lineHeight: {
				56: "3.5rem",
				120: "120%",
			},
			colors: {
				darkBlue: "#12326B",
				gray: "rgb(226, 229, 236)",
				lightblue: "#17a2b8",
				midblue: "#122d3c",
				black: "#000",
				black1: "#1f1f1f",
				black2: "#303030",
				black3: "#191919",
				black4: "#121212",
				white1: "#e5e5e5",
				green: "#059669",
			},
			maxWidth: {
				desktop: "1280px",
			},
			boxShadow: {
				custom: "rgba(0, 0, 0, 0.15) 0px 4px 8px 0px",
			},

			screens: {
				md: "767px",
				lg: "1023px",
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin.cjs")],
};
export default config;
