import meta4 from "public/images/meta4.jpg";
import meta5 from "public/images/meta5.jpg";
import gotrader from "public/images/go-trader.jpg";
import Image from "next/image";

export default function Platforms() {
	return (
		<section className="mt-20 py-20 max-w-desktop mx-auto px-6 xl:px-0">
			<h2 className="text-center font-extrabold text-2xl xl:text-4xl mb-14">
				Integrated platform power
			</h2>
			<div className="grid lg:grid-cols-3 gap-10">
				<div>
					<Image src={meta4} alt="meta 4" />
					<h3 className="font-bold text-2xl my-5">MetaTrader 4</h3>
					<p className="text-lg">
						A popular platform with new and expert traders for trading Forex, analysing markets and
						using EAs.
					</p>
				</div>
				<div>
					<Image src={meta5} alt="meta 4" />
					<h3 className="font-bold text-2xl my-5">MetaTrader 5</h3>
					<p className="text-lg">
						This powerful multi-asset platform lets you trade Forex, Shares and Futures as CFDs.
					</p>
				</div>
				<div>
					<Image src={gotrader} alt="meta 4" />
					<h3 className="font-bold text-2xl my-5">GO WebTrader</h3>
					<p className="text-lg">
						A simplified MT4 and MT5 version allowing you to access your trading account from your
						browser.
					</p>
				</div>
			</div>
		</section>
	);
}
