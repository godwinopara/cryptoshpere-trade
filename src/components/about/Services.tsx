import TradingOptionWrapper from "../shared/TradingOptionWrapper";

export default function Services() {
	return (
		<section className="max-w-desktop mx-auto py-20 px-6 xl:px-0">
			<div className="mb-20">
				<h3 className="text-green text-xl mb-4 font-semibold">Our Services</h3>
				<h2 className="text-3xl xl:text-5xl font-extrabold mb-5">
					Our Services, <br />
					Serves You
				</h2>
				<p className="lg:max-w-[70%] xl:max-w-[50%] text-lg">
					We offer over 350 tradable CFD instruments including Forex, Crypto, Indices and
					Commodities. Widely recognised as Australia’s first MT4 broker, we’ve since added MT5,
					mobile trading and a web-based version to our trading platform suite. Universal
					Cryptosphere Trade offers spread-based and commission-based accounts.
				</p>
			</div>

			<TradingOptionWrapper />
		</section>
	);
}
