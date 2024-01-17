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

export default function Home() {
	return (
		<>
			<Head>
				<title>Your Website Title</title>
				<meta
					name="description"
					content="Forex Broker offering Forex, Indices, Commodities and Share CFDs. Powerful platforms, trading resources and more."
				/>

				<link rel="canonical" href="index.html" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content="Trade global CFD markets. Forex, Indices &amp; more. Universal Cryptosphere Trade."
				/>
				<meta
					property="og:description"
					content="Forex Broker offering Forex, Indices, Commodities and Share CFDs. Powerful platforms, trading resources, demo accounts and more."
				/>
				<meta property="og:url" content="https://universalcryptosphere.com" />
				<meta property="og:site_name" content="Universal Cryptosphere Trade" />
				<meta property="article:modified_time" content="2022-07-03T23:06:42+00:00" />
				<meta name="twitter:card" content="summary_large_image" />
				{/* Add other meta tags or links as needed */}
			</Head>
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
