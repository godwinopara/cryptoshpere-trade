import Button from "@/components/shared/Button";
import Image from "next/image";
import heroImg from "public/images/funding-bg.png";
import candleStick from "public/images/candle-sticks@2x.png";
import forexIcon from "public/images/fx-icon@2x.png";
import goldIcon from "public/images/gold@2x.png";
import indicesIcon from "public/images/indices-icon@2x-1.png";
import oilIcon from "public/images/oil-icon@2x.png";
import ProductCard from "@/components/product/ProductCard";
import Procedures from "@/components/shared/Procedures";
import ProductHero from "@/components/product/ProductHero";

export default function Product() {
	const products = [
		{
			title: "Forex CFDs",
			description:
				"Forex is the world’s most traded financial market. Open 24hrs a day with unmatched liquidity. The opportunities to trade foreign currency price movements are endless. With powerful tools like MT4 and MT5, we help you intuitively analyse and manage your FX trading.",
			options: ["Access 50+ currency pairs", "Tight, competitive spreads", "Leverage up to 500:1"],
			img: forexIcon,
		},

		{
			title: "Shares CFDs",
			description:
				"Trade AU, US & HK share CFDs with us and take advantage of all market conditions. By speculating on price movements without owning underlying shares, you can benefit even in bearish territory. You get the MetaTrader 5 platform’s superior tools plus low commissions.",
			options: [
				"200+ ASX Shares, 80+ US Shares and 70+ HKEX Shares",
				"Leverage up to 5:1",
				"24/5 dedicated client support",
			],
			img: candleStick,
		},
		{
			title: "Index CFDs",
			description:
				"Indices track groups of listed shares, so you access whole stock markets with these CFDs. You trade the underlying asset’s price movement without buying the actual asset. Indices trading gives you exposure to shares, without the cost and research of individual stock investment.",
			options: [
				"Trade popular markets like FTSE 100, CAC 40, US 500 and ASX 200",
				"Access leverage up to 20:1",
				"Trade long and short",
			],
			img: indicesIcon,
		},
		{
			title: "Metal CFDs",
			description:
				"With values driven by supply and demand, precious metals are a fast-moving global market. Universal Cryptosphere Trade lets you trade metals like Gold and Silver with the benefit of award-winning technology, informative broker data, competitive spreads and low margins.",
			options: [
				"Access a range of precious metal pairs",
				"Trade without buying physical metals",
				"Powerful platforms",
			],
			img: goldIcon,
		},
		{
			title: "Commodity CFDs",
			description:
				"Resources like oil and precious metals are economic fundamentals creating one of the world’s most heavily-traded markets. By representing physical goods, our CFDs let you trade price movement across a wide range of essential commodities.",
			options: [
				"Trade one of the world’s most liquid markets",
				"Lower trading cost",
				"Fast trade execution",
			],
			img: oilIcon,
		},
	];

	return (
		<>
			<ProductHero />
			<section className="py-20">
				<h2 className="text-3xl text-center font-bold lg:text-4xl mb-16">
					600+ products. Global markets. One account.
				</h2>
				<div className="max-w-desktop mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-0 lg:grid-cols-5">
					<div className="flex flex-col items-center">
						<Image src={forexIcon} alt="metatrader 4" className="w-[20%] mb-4" />
						<h3 className="text-xl font-bold">Forex</h3>
					</div>
					<div className="flex flex-col items-center">
						<Image src={candleStick} alt="metatrader 5" className="w-[20%] mb-4" />
						<h3 className="text-xl font-bold">Share CFDs</h3>
					</div>
					<div className="flex flex-col items-center">
						<Image src={indicesIcon} alt="meta trading" className="w-[20%] mb-4" />
						<h3 className="text-xl font-bold">Indices</h3>
					</div>
					<div className="flex flex-col items-center">
						<Image src={goldIcon} alt="meta trading" className="w-[20%] mb-4" />
						<h3 className="text-xl font-bold">Metals</h3>
					</div>
					<div className="flex flex-col items-center">
						<Image src={oilIcon} alt="meta trading" className="w-[20%] mb-4" />
						<h3 className="text-xl font-bold">Commodities</h3>
					</div>
				</div>
			</section>
			<section className="bg-black text-white1 py-20">
				<div className="max-w-desktop mx-auto">
					<h2 className="text-center font-bold text-4xl mb-6">
						In any asset class, GO to the next level.
					</h2>
					<p className="px-6 xl:px-0 xl:w-[60%] mb-16 mx-auto text-center text-lg">
						We enhance trading with dependable tools, fast execution and platforms letting you
						maximise your strategy. Go up a gear, whatever market you want to trade.
					</p>

					<div>
						{products.map((product, key) => {
							return (
								<ProductCard
									key={key}
									title={product.title}
									description={product.description}
									options={product.options}
									img={product.img}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className="text-black py-20">
				<h2 className="text-2xl mb-20 font-bold lg:mb-32 text-center lg:text-4xl">
					Start Trading with Universal Cryptosphere Trade
				</h2>
				<Procedures />
				<div className="flex justify-center mt-20">
					<Button btnText="Open Account" className="bg-green mx-auto h-[60px] w-[300px]" />
				</div>
			</section>
		</>
	);
}
