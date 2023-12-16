import Image from "next/image";
import award from "public/images/awards.png";

export default function Awards() {
	return (
		<section className="text-center py-20 px-6 xl:px-0">
			<h2 className="text-4xl font-bold mb-5">Trade with a Multi-Award Winning Broker*</h2>
			<p className="lg:max-w-[60%] mx-auto text-lg my-5">
				Investment Trends has rated GO Markets No.1 for Customer Service and, for the fourth year in
				a row, best in Education Materials/Programmes! We are also the highest rated broker in the
				service areas of Trading Ideas & Strategies, Margin Requirements and Account
				Funding/Withdrawals!
			</p>
			<div className="flex justify-center">
				<Image src={award} alt="awards" />
			</div>
		</section>
	);
}
