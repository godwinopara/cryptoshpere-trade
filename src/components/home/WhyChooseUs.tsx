import Image, { StaticImageData } from "next/image";
import broker from "public/images/broker.png";
import execution from "public/images/execution.png";
import funds from "public/images/funds.png";
import noFees from "public/images/no-fees.png";
import portfolio from "public/images/portfolio.png";
import support from "public/images/support.png";

export default function WhyChooseUs() {
	return (
		<section className="max-w-desktop mx-auto px-3 lg:px-0 py-28">
			<div className="text-center">
				<h2 className="text-3xl font-semibold lg:text-4xl lg:font-extrabold mb-10">
					Why trade with Limitless Trade Ltd?
				</h2>
				<p className="lg:max-w-[70%] mx-auto leading-7 mb-20 text-lg">
					Universal Cryptosphere Trade is not fully automated. We have human discretionary traders
					and we do make hedge execution decisions based on client trading behaviour or account
					profitability. Over 600 products, tight spreads, transparent pricing, powerful platforms.
					Backed by unmatched support.
				</p>
			</div>
			<div className="grid grid-cols-2 gap-3 lg:flex items-center justify-between w-[90%] mx-auto">
				<WCUCard img={portfolio} text="Multi Portfolio" />
				<WCUCard img={broker} text="Regulated Broker" />
				<WCUCard img={funds} text="Safe Client Funds" />
				<WCUCard img={execution} text="Fast Execution" />
				<WCUCard img={support} text="24/7 Support" />
				<WCUCard img={noFees} text="No Deposit Fees" />
			</div>
		</section>
	);
}

interface WCUCardProps {
	img: string | StaticImageData;
	text: string;
}

const WCUCard = ({ img, text }: WCUCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<Image src={img} alt="portfolio icon" height={50} width={70} />
			<span className="text-center text-lg mt-5 font-bold">{text}</span>
		</div>
	);
};
