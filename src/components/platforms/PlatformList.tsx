import Image from "next/image";
import metatrader4 from "public/images/metatrader4@2x.png";
import metatrader5 from "public/images/metatrader5@2x.png";
import mobileTrading from "public/images/mobile-trading@2x.png";
import webtrader from "public/images/webtrader@2x.png";

export default function PlatformList() {
	return (
		<section className="py-20">
			<h2 className="text-3xl text-center font-bold lg:text-4xl mb-16">
				Any place. Any device. You’re set to trade
			</h2>
			<div className="max-w-desktop mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-0 lg:grid-cols-4">
				<div className="flex flex-col items-center">
					<Image src={metatrader4} alt="metatrader 4" className="w-[20%] mb-4" />
					<h3 className="text-xl font-bold">Meta Trader 4</h3>
				</div>
				<div className="flex flex-col items-center">
					<Image src={metatrader5} alt="metatrader 5" className="w-[20%] mb-4" />
					<h3 className="text-xl font-bold">Meta Trader 5</h3>
				</div>
				<div className="flex flex-col items-center">
					<Image src={mobileTrading} alt="meta trading" className="w-[20%] mb-4" />
					<h3 className="text-xl font-bold">Mobile Trading</h3>
				</div>
				<div className="flex flex-col items-center">
					<Image src={webtrader} alt="meta trading" className="w-[20%] mb-4" />
					<h3 className="text-xl font-bold">Universal WebTrader</h3>
				</div>
			</div>
		</section>
	);
}
