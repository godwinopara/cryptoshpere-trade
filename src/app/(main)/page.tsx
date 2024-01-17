import FairPricing from "@/components/home/FairPricing";
import Features from "@/components/shared/Features";
import Hero from "@/components/home/Hero";
import Meta from "@/components/home/Meta";
import Plans from "@/components/home/Plans";
import Reviews from "@/components/shared/Reviews";
import TradeWithUs from "@/components/home/TradeWithUs";
import TradingOptions from "@/components/home/TradingOptions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyTradeCrypto from "@/components/home/WhyTradeCrypto";
import Head from "next/head";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Trade global CFD markets. Forex, Indices &amp; more. Universal Cryptosphere Trade",
	description:
		"Forex Broker offering Forex, Indices, Commodities and Share CFDs. Powerful platforms, trading resources and more.",
};

export default function Home() {
	return (
		<>
			<Hero />
			<WhyChooseUs />
			<Features />
			<TradingOptions />
			<WhyTradeCrypto />
			<FairPricing />
			<TradeWithUs />
			<Plans />
			<Reviews />
			<Meta />
		</>
	);
}
