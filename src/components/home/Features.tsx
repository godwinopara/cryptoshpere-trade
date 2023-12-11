import Image from "next/image";
import phone from "public/images/phone.png";
import { FaShieldAlt, FaChartPie, FaMoneyCheck, FaComment } from "react-icons/fa";

export default function Features() {
	return (
		<section className="py-20 bg-black4 text-white1">
			<div className="max-w-desktop mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl font-bold mb-3">Start Investing Today</h2>
					<p className="text-xl">
						Universal Cryptosphere Trade has a variety of features that set us apart
					</p>
				</div>

				<div className="grid grid-cols-2 items-center gap-20">
					<div>
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
								ticker in member portfolio and copy trade connect directly to our results."
						/>
					</div>
					<div className="bg-pattern2 bg-center bg-cover">
						<Image src={phone} alt="image of a chart" />
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
		<div className="mb-10 flex gap-x-6 items-start">
			<div className="text-3xl bg-green rounded-[100%] p-4">{icon}</div>
			<div>
				<h3 className="font-semibold text-xl mb-2 text-white">{title}</h3>
				<p className="w-[80%]">{description}</p>
			</div>
		</div>
	);
};
