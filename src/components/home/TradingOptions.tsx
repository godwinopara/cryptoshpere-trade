import Image, { StaticImageData } from "next/image";
import forex from "public/images/forex.png";
import cfd from "public/images/cfd.png";
import crypto from "public/images/crypto.png";
import metals from "public/images/metals.png";
import indices from "public/images/indices.png";
import commodities from "public/images/commodities.png";
import TradingOptionsCard from "../shared/TradingOptionsCard";

export default function TradingOptions() {
	return (
		<section className="px-3 py-32 xl:px-0">
			<div className="max-w-desktop mx-auto">
				<div className="text-center">
					<h2 className="text-3xl lg:text-4xl font-bold mb-10">
						Endless Trading Possibilities With a Single Account
					</h2>
					<p className="lg:max-w-[60%] mx-auto leading-7 text-lg">
						Universal Cryptosphere Trade Insights lets you diversify your portfolio by investing in
						a global selection of stocks, ETFs, Futures, carefully screened and curated into
						portfolios just for you. Trade more than 600 products including Forex, Share CFDs,
						Commodities, Indices, and Metals.
					</p>
				</div>
				<div className="grid px-4 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-28 xl:px-0 xl:pl-10">
					<TradingOptionsCard
						img={forex}
						title="Forex"
						alt="forex icon"
						description="Trade 50+ Currency Pairs with a leading global CFD provider"
					/>
					<TradingOptionsCard
						img={cfd}
						title="Share CFDs"
						alt="cfds icon"
						description="Go long or short on 200+ ASX shares, 80+ top US shares and HKEX shares"
					/>
					<TradingOptionsCard
						img={indices}
						title="Indices"
						alt="indices diagram"
						description="Access a wide range of Index CFD trades via MT4 & MT5 Platforms"
					/>
					<TradingOptionsCard
						img={metals}
						title="Metals"
						alt="metals diagram"
						description="Access a range of precious metal pairs through Limitless Trade Ltd"
					/>
					<TradingOptionsCard
						img={crypto}
						title="Cryptocurrency"
						alt="crypto signal diagram"
						description="Avoid the complexities of a digital wallet, trade cryptocurrency from the same MT4 platform you use for trading"
					/>
					<TradingOptionsCard
						img={commodities}
						title="Commodities"
						alt="diagram of commodity"
						description="Trade one of the world’s most heavily-traded markets"
					/>
				</div>
			</div>
		</section>
	);
}
