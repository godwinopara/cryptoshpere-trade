import Image from "next/image";
import phone from "public/images/phone.png";
import { FaShieldAlt, FaChartPie, FaMoneyCheck, FaComment } from "react-icons/fa";

export default function Features() {
	return (
		<section className="px-3 py-20 xl:px-0 bg-black4 text-white1">
			<div className="max-w-desktop mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold mb-3">Start Investing Today</h2>
					<p className="text-xl">
						Universal Cryptosphere Trade has a variety of features that set us apart
					</p>
				</div>

				<div className="grid xl:flex items-center gap-20">
					<div className="md:grid md:grid-cols-2 xl:w-[60%]">
						<FeatureCard
							icon={<FaMoneyCheck />}
							title="Fast Payments"
							description="Accessing trading gain made easy for you, Our platform make using Forex gains easy
								for all, regardless of your technical abilities"
						/>
						<FeatureCard
							icon={<FaChartPie />}
							title="Manage Your Portfolio"
							description="Buy and sell popular digital currencies, keep track of them in the one place."
						/>
						<FeatureCard
							icon={<FaShieldAlt />}
							title="Valid Protection"
							description="For added security, store your funds in a vault with time delayed withdrawals."
						/>
						<FeatureCard
							icon={<FaComment />}
							title="Transparent Reporting"
							description="Access trade result easily and check historical trade result with up to date trade
								ticker in member portfolio."
						/>
					</div>
					<div className="bg-pattern2 bg-center bg-cover xl:w-[40%]">
						<Image src={phone} alt="image of a chart" className="mx-auto w-1/2 xl:w-full" />
					</div>
				</div>
			</div>
		</section>
	);
}

interface FeatureCardProps {
	title: string;
	description: string;
	icon?: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
	return (
		<div className="mb-10 px-4 xl:px-0 lg:flex gap-x-6 items-start">
			<div className="inline-block mb-4 text-3xl bg-green rounded-[100%] p-4 lg:mb-0 lg:block">
				{icon}
			</div>
			<div>
				<h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
				<p className="lg:w-[80%]">{description}</p>
			</div>
		</div>
	);
};
