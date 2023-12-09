import Image from "next/image";
import Button from "../shared/Button";
import i13 from "public/images/i13.png";

export default function Plans() {
	return (
		<section className="bg-gray py-24">
			<div className="max-w-desktop mx-auto lg:grid grid-cols-2 items-center">
				<div className="pb-8 lg:pb-10">
					<Image src={i13} alt="image of a phone" width={400} />
				</div>
				<div className="lg:flex items-center gap-4">
					<div className="text-center bg-white border border-t-4 p-10 border-darkBlue">
						<h3 className="font-bold text-xl mb-5">GO Plus+ Account</h3>
						<strong className="block mb-8">Leverage up to 500:1</strong>
						<strong className="block mb-8">Spreads from 0.0 pips</strong>
						<strong className="block mb-8">AU $3.00 Commission per side</strong>
						<strong className="block mb-4">Available Base Currencies</strong>

						<p className="mb-8">
							AUD, USD, EUR, GBP, NZD, <br />
							CAD, SGD, CHF
						</p>
						<Button btnText="Open Account" className="bg-darkBlue text-white" />
					</div>
					<div className="text-center  border-t-4 p-10 mt-10 border-darkBlue">
						<h3 className="font-bold text-xl mb-5">Standard Account</h3>
						<strong className="block mb-8">Leverage up to 500:1</strong>
						<strong className="block mb-8">Spreads from 1.0 pips</strong>
						<strong className="block mb-8">AU $0.00 Commission per side</strong>
						<strong className="block mb-4">Available Base Currencies</strong>

						<p className="mb-8">
							AUD, USD, EUR, GBP, NZD, <br />
							CAD, SGD, CHF
						</p>
						<Button btnText="Open Account" className="bg-darkBlue text-white" />
					</div>
				</div>
			</div>
		</section>
	);
}
