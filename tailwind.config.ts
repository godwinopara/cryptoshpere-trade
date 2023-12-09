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
				homeHeroBg: "url('/images/homepage-hero-bg.jpg')",
			},
			fontSize: {
				46: "2.875rem",
			},
			lineHeight: {
				56: "3.5rem",
			},
			colors: {
				darkBlue: "#12326B",
				gray: "rgb(226, 229, 236)",
				lightblue: "#17a2b8",
				midblue: "#122d3c",
			},
			maxWidth: {
				desktop: "1200px",
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
