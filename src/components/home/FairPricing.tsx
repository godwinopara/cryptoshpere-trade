import Image from "next/image";
import fairPricingImg from "public/images/pricing-execution.png";

export default function FairPricing() {
	return (
		<section className="bg-gray py-24 px-4 lg:px-0">
			<div className="max-w-desktop mx-auto grid lg:grid-cols-2 lg:gap-20 items-center">
				<div>
					<Image src={fairPricingImg} alt="Laptop diagram" />
				</div>

				<div className="text-lg">
					<h2 className="text-3xl lg:text-4xl font-bold mb-7">
						Better and fairer pricing and execution
					</h2>
					<p>
						Universal Cryptosphere Trade aims to be the number retail Crypto Company in the world
						for pricing and execution across all forex and metals. This is to say that your trades,
						executed with Limitless Trade Ltd, will be as good or better than any other retail
						Crypto Company in the world.
					</p>
					<br />
					<p>
						Universal Cryptosphere Trade uses ‘non-bank market makers’ and other Crypto Companys to
						price and execute Index and Commodity CFD trades. Limitless Trade Ltd earns a percentage
						of the spread after hedging costs from these trading counterparties. These
						counterparties do not run a B-book for Limitless Trade Ltd.
					</p>
					<br />
					<p>
						Make investments using popular digital currencies with Limitless Trade Ltd! With
						Limitless Trade Ltd you can make investments using popular digital currencies like
						Bitcoin, Ethereum and Tether (USDT) amongst others.
					</p>
				</div>
			</div>
		</section>
	);
}
