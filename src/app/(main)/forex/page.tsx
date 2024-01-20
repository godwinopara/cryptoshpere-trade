"use client";

import { useEffect } from "react";

import ForexHero from "@/components/forex/ForexHero";
import Benefits from "@/components/forex/Benefits";
import ForexPairs from "@/components/forex/ForexPairs";
import Desc from "@/components/forex/Desc";
import Platforms from "@/components/forex/Platforms";
import FxAccordion from "@/components/forex/FxAccordion";

export default function ForexCFD() {
	useEffect(() => {
		const init = async () => {
			const { Tab, initTE } = await import("tw-elements");
			initTE({ Tab });
		};
		init();
	}, []);

	return (
		<>
			<ForexHero />
			<Benefits />
			<Desc />
			<ForexPairs />
			<Platforms />
			<FxAccordion />
		</>
	);
}
