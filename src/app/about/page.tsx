"use client";

import AboutDetails from "@/components/about/AboutDetails";
import AboutHero from "@/components/about/AboutHero";
import CoreValues from "@/components/about/CoreValues";
import Services from "@/components/about/Services";
import Stats from "@/components/about/Stats";
import Features from "@/components/shared/Features";
import Reviews from "@/components/shared/Reviews";

export default function About() {
	return (
		<main>
			<AboutHero />
			<Stats />
			<AboutDetails />
			<CoreValues />
			<Services />
			<Features />
			<Reviews />
		</main>
	);
}
