"use client";

import ShareAccodion from "@/components/share/ShareAccodion";
import ShareBenefits from "@/components/share/ShareBenefits";
import ShareDesc from "@/components/share/ShareDesc";
import ShareHero from "@/components/share/ShareHero";
import ShareProductRange from "@/components/share/ShareProductRange";
import { useEffect } from "react";

export default function page() {
	useEffect(() => {
		const init = async () => {
			const { Tab, initTE } = await import("tw-elements");
			initTE({ Tab });
		};
		init();
	}, []);

	return (
		<>
			<ShareHero />
			<ShareBenefits />
			<ShareDesc />
			<ShareProductRange />
			<ShareAccodion />
		</>
	);
}
