import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import TradingOptions from "@/components/home/TradingOptions";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<WhyChooseUs />
			<Features />
			<TradingOptions />
		</main>
	);
}
