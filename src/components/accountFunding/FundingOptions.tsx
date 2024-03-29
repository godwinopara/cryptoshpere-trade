import mastercard from "public/images/mastercard.png";
import skrill from "public/images/skrill.png";
import visa from "public/images/visa.png";
import neteller from "public/images/neteller.png";
import fasapay from "public/images/fasapay.png";
import bank from "public/images/bank.png";
import Image, { StaticImageData } from "next/image";
import Button from "../shared/Button";

export default function FundingOptions() {
	return (
		<section className="bg-black4 text-white1 py-24 px-6 xl:px-0">
			<div className="max-w-desktop mx-auto">
				<div className="mb-32">
					<h2 className="text-4xl font-bold mb-5">Flexible Account Funding</h2>
					<p className=" lg:max-w-[70%] text-lg">
						Universal Cryptosphere Trade makes it simple to move your money from place to place. We
						provide a range of account funding and account withdrawal options in multiple base
						currencies. Deposit instantly and for free using a variety of methods via the Client
						Portal.
					</p>
				</div>

				<div>
					<FundingOptionsCard
						img={mastercard}
						imgLabel="Mastercard"
						currencies="AUD, USD, GBP, EUR, AED, SGD, CAD, CHF, HKD, NZD"
						instant
					/>
					<FundingOptionsCard
						img={visa}
						imgLabel="Visa"
						currencies="AUD, USD, GBP, EUR, AED, SGD, CAD, CHF, HKD, NZD"
						instant
					/>
					<FundingOptionsCard
						img={skrill}
						imgLabel="Skrill"
						currencies="AUD, USD, GBP, EUR, NZD, SGD"
						instant
					/>
					<FundingOptionsCard
						img={neteller}
						imgLabel="Neteller"
						currencies="AUD, USD, GBP, EUR, SGD"
						instant
					/>
					<FundingOptionsCard
						img={bank}
						imgLabel="Bank/Wire Transfer"
						currencies="AUD, USD, GBP, EUR, AED, SGD, CAD, CHF, HKD, NZD"
						instant={false}
					/>
					<FundingOptionsCard img={fasapay} imgLabel="FASAPAY" currencies="USD" instant />
				</div>

				<div className="text-xl lg:max-w-[70%] mx-auto md:text-lg italic my-24">
					<p>
						<strong>Please note: </strong>not all payment options are available in all countries.
						Please log into the secure Client Portal to view what payment options are available to
						you.
					</p>
					<br />
					Payments to and from international banking institution may attract intermediary transfer
					fees and/or conversion fees from either party which are independent of Universal
					Cryptosphere Trade.Any such fees will be the responsibility of the client.
				</div>
			</div>
		</section>
	);
}

interface FundingOptionCardProps {
	img: string | StaticImageData;
	imgLabel: string;
	currencies: string;
	instant: boolean;
}

const FundingOptionsCard = ({ img, imgLabel, currencies, instant }: FundingOptionCardProps) => {
	return (
		<div className="md:flex gap-x-10 items-center  mb-20 xl:mb-0 xl:justify-between">
			<div className="flex items-center w-full">
				<Image
					src={img}
					alt="mastercard logo"
					width={100}
					className="mb-4 mx-auto md:mx-0 md:mr-4"
				/>
				<p className="font-bold text-xl text-center md:text-left">{imgLabel}</p>
			</div>
			<div className="w-full text-center md:text-left">
				<p className="font-bold text-xl mb-3">Accepted Currencies</p>
				<p className="mb-5 xl:mb-0">{currencies}</p>
			</div>
			<div className="w-full mb-5 text-center xl:text-left xl:pl-24  xl:mb-0">
				{instant && (
					<p>
						<span className="font-bold text-green">INSTANT</span>
						PROCESSING
					</p>
				)}
				{!instant && (
					<p>
						<span className="font-bold text-green">1 – 3 BUSINESS DAYS PROCESSING</span>
					</p>
				)}
				<p>
					<span className="font-bold text-green">ZERO</span> INTERNAL FEES
				</p>
			</div>

			<Button btnText="Deposit" className="bg-green rounded-md flex items-center mx-auto" />
		</div>
	);
};
