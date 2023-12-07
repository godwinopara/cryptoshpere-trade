import Image from "next/image";
import signal from "public/images/signal.png";

export default function WhyTradeCrypto() {
	return (
		<section className="grid grid-cols-2 gap-20 items-center text-lg max-w-desktop mx-auto py-24">
			<div>
				<h2 className="text-3xl font-bold mb-8">Why Trade Cryptocurrency?</h2>
				<p className="mb-10">
					The cryptocurrency market is usually available to trade 24 hours a day, seven days a week
					because there is no centralised governance of the market. Cryptocurrency transactions take
					place directly between individuals, on cryptocurrency exchanges all over the world.
				</p>
				<div>
					<div>
						<span className="mr-2">&#10004;</span> Fast payments without/less fees
					</div>
					<div>
						<span className="mr-2">&#10004;</span> Blockchain high-tech security
					</div>
					<div>
						<span className="mr-2">&#10004; </span>Free Access and quick registration
					</div>
					<div>
						<span className="mr-2">&#10004; </span>Trusted & Regulated Broker{" "}
					</div>
				</div>
			</div>
			<div>
				<Image src={signal} alt="trading signal" />
			</div>
		</section>
	);
}
