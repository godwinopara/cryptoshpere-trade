import PlatformsHero from "@/components/platforms/PlatformsHero";
import Image, { StaticImageData } from "next/image";

import mt4 from "public/images/MT4-1.png";
import mt5 from "public/images/MT5-1.png";
import trader from "public/images/webtrader.png";
import mobileTrade from "public/images/mobile-trading.png";

import PlatformCard from "@/components/platforms/PlatformCard";
import PlatformList from "@/components/platforms/PlatformList";
import Button from "@/components/shared/Button";

import autochartist from "public/images/autochartist-2@2x.jpg";
import genesis from "public/images/genesis@2x.jpg";
import tradingcentral from "public/images/tradingcentral-2@2x.jpg";
import Procedures from "@/components/shared/Procedures";

export default function Platforms() {
	const platforms = [
		{
			title: "Meta Trader 4",
			description:
				"We’ve evolved this popular platform’s simplicity and features, creating a world-class solution. New and expert traders benefit from speed, advanced charting and our performance-boosting add-ons.",
			options: ["Fast Execution", "Advanced Charting Options", "Expert Advisors and VPS options"],
			img: mt4,
		},

		{
			title: "Meta Trader 5",
			description:
				"A high-powered, intuitive platform allowing multiple asset classes to be traded. Enjoy precision management through broad price analysis, algorithmic trading applications and more.",
			options: [
				"Modern and Comfortable Platform",
				"Professional Technical Analysis",
				"Algorithmic Trading",
			],
			img: mt5,
		},
		{
			title: "Mobile Trading",
			description:
				"Tap into opportunity, any time. MT4 and MT5 power goes with you on our mobile app. Access the same tools, features and speedy execution you do on desktop.",
			options: [
				"Compatible with both Android and iOS devices",
				"Trade Forex, Indices and Commodities as CFDs anytime, anywhere",
				"Access the same analytical tools, features and speed as desktop application",
			],
			img: mobileTrade,
		},
		{
			title: "Web Trading",
			description:
				"This web-based MT4 and MT5 version lets you place and monitor trades where you don’t have the platform downloaded. Great for when you’re on the move, or manual trading.",
			options: [
				"No need to download the App",
				"Easy-to-use interface",
				"Suitable for both beginner and advanced traders",
			],
			img: trader,
		},
	];

	return (
		<>
			<PlatformsHero />
			<PlatformList />

			<section className="bg-black text-white1 py-20">
				<div className="max-w-desktop mx-auto">
					<h2 className="text-center font-bold text-4xl mb-6">
						Trade CFDs from platforms of strength
					</h2>
					<p className="w-[60%] mb-16 mx-auto text-center text-lg">
						Universal Cryptosphere Trade lets you harness the power of MetaTrader 4 and MetaTrader
						5. On desktop or mobile, these industry-standard platforms open up high-quality trading
						opportunities to all levels of trader.
					</p>

					<div>
						{platforms.map((platform, key) => {
							return (
								<PlatformCard
									key={key}
									title={platform.title}
									description={platform.description}
									options={platform.options}
									img={platform.img}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<section className="max-w-desktop mx-auto py-20">
				<div className="mb-32">
					<h2 className="text-center font-bold text-4xl mb-5">Wide market choice</h2>
					<p className="px-6 text-center text-lg xl:px-0 xl:w-[60%] mx-auto">
						Over 350 CFD products, competitive spreads and margins across FX, share CFDs, indices,
						metals and commodities.
					</p>
				</div>

				<div className="px-6 xl:px-0">
					<h2 className="text-center mb-16 text-4xl font-bold">Tools to advance your trading</h2>
					<div className="grid gap-y-20 lg:gap-y-0 md:grid-cols-2 md:gap-x-20 lg:grid-cols-3">
						<ToolsCard
							img={autochartist}
							title="Autochartist"
							description="One of our clients’ favourite MT4 charting tools, automatically scanning markets to deliver price action alerts, analysis, forecasts and more."
						/>
						<ToolsCard
							img={tradingcentral}
							title="Trading Central"
							description="AI analytics and analyst expertise combine to offer unbiased trading ideas, validation of new opportunities and education."
						/>
						<ToolsCard
							img={genesis}
							title="MT4 & MT5 Genesis"
							description="Our suite of key MetaTrader add-ons boosts your power to place trades, identify new opportunities and manage risk."
						/>
					</div>
				</div>
			</section>

			<div className="bg-black text-white py-20">
				<h2 className="text-2xl mb-20 font-bold lg:mb-32 text-center lg:text-4xl">
					Start Trading with Universal Cryptosphere Trade
				</h2>
				<Procedures />
				<div className="flex justify-center mt-20">
					<Button btnText="Open Account" className="bg-green mx-auto h-[60px] w-[300px]" />
				</div>
			</div>
		</>
	);
}

interface ToolsCardProps {
	img: StaticImageData;
	title: string;
	description: string;
}

const ToolsCard = ({ img, title, description }: ToolsCardProps) => {
	return (
		<div>
			<div className="mb-5">
				<Image src={img} alt="trading tool" />
			</div>
			<h3 className="font-bold text-xl mb-3">{title}</h3>
			<p>{description}</p>
			<Button btnText="Learn More" className="bg-green rounded-md text-white mt-5" />
		</div>
	);
};
