import Image, { StaticImageData } from "next/image";
import broker from "public/images/broker.png";
import execution from "public/images/execution.png";
import funds from "public/images/funds.png";
import noFees from "public/images/no-fees.png";
import portfolio from "public/images/portfolio.png";
import support from "public/images/support.png";

import { IconType } from "react-icons";
import { FaUserShield, FaBuilding, FaHeadset, FaUser } from "react-icons/fa";

export default function WhyChooseUs() {
	return (
		<section className=" px-3 xl:px-0 py-28 bg-black text-white1">
			<div className="max-w-desktop mx-auto">
				<div className="text-center">
					<h2 className="text-3xl font-semibold lg:text-5xl lg:font-extrabold mb-10">
						Why Universal Cryptosphere Trade?
					</h2>
					<p className="lg:max-w-[70%] mx-auto leading-7 mb-24 text-xl">
						At Universal Cryptosphere Trade, our trading approach seamlessly combines the insights
						of experienced human discretionary traders with strategic hedge execution decisions
						driven by client trading behavior and account performance. We boast an extensive range
						of more than 600 products, featuring narrow spreads, transparent pricing, and robust
						platforms. Supported by an exceptional level of customer service, we are dedicated to
						providing an unmatched trading experience for our clients.
					</p>
				</div>
				<div className="grid md:grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-8">
					<WCUCard
						img={<FaUserShield />}
						text="Secure and Stable"
						description="We provide a trusted and intuitive platform for users, of all experience levels, to trade how they want."
					/>
					<WCUCard
						img={<FaBuilding />}
						text="Regulated Broker"
						description="Universal Cryptosphere Trade operates in full compliance with SEC and CFTC, ensuring a secure environment for your investments"
					/>
					<WCUCard
						img={<FaHeadset />}
						text="24/7 Support"
						description="Reach out to our support team with any issues and we'll help you resolve them as quickly as possible."
					/>
					<WCUCard
						img={<FaUser />}
						text="Expertise and Experience:"
						description="Our team consists of seasoned professionals experienced in cryptocurrency, blockchain and traditional finance.
"
					/>
				</div>
			</div>
		</section>
	);
}

interface WCUCardProps {
	img: React.ReactNode;
	text: string;
	description?: string;
}

const WCUCard = ({ img, text, description }: WCUCardProps) => {
	return (
		<div className="flex flex-col justify-center w-full bg-black4 py-12 px-6 rounded-md">
			<div className="text-4xl text-green flex items-center">{img}</div>
			<span className="text-lg mt-5 mb-3 font-bold">{text}</span>
			<p className="h-20">{description}</p>
		</div>
	);
};
