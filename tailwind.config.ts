import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
			},
			maxWidth: {
				desktop: "1200px",
			},
		},
	},
	plugins: [],
};
export default config;
