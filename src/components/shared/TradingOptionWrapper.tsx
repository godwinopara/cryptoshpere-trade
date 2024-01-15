import forex from "public/images/forex.png";
import cfd from "public/images/cfd.png";
import crypto from "public/images/crypto.png";
import metals from "public/images/metals.png";
import indices from "public/images/indices.png";
import commodities from "public/images/commodities.png";
import TradingOptionsCard from "./TradingOptionsCard";

export default function TradingOptionWrapper() {
	return (
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
				description="Access a range of precious metal pairs through Universal Cryptosphere Trade"
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
	);
}
