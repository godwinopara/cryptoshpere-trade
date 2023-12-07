import FairPricing from "@/components/home/FairPricing";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Meta from "@/components/home/Meta";
import Plans from "@/components/home/Plans";
import Reviews from "@/components/home/Reviews";
import TradeWithUs from "@/components/home/TradeWithUs";
import TradingOptions from "@/components/home/TradingOptions";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhyTradeCrypto from "@/components/home/WhyTradeCrypto";

export default function Home() {
	return (
		<main className="">
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
		</main>
	);
}
