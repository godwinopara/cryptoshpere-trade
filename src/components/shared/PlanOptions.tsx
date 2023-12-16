import { FaCheck } from "react-icons/fa";
import Button from "./Button";

export default function PlanOptions() {
	return (
		<div className="lg:grid grid-cols-2 gap-x-20 max-w-desktop mx-auto">
			<div className="bg-white py-14 px-10 text-black border border-t-4 mb-20 lg:mb-0">
				<h3 className="font-bold text-2xl mb-5">GO Plus+ Account</h3>
				<p className="text-xl mb-8">Leverage up to 500:1</p>
				<p className="text-xl mb-8">Spreads from 0.0 pips</p>
				<p className="text-xl mb-8">AU $3.00 Commission per side</p>
				<p className="text-xl font-medium mb-8">Available Base Currencies</p>
				<ul className="grid grid-cols-3 gap-5 mb-8">
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						AUD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						USD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						EUR
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						GBP
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						NZD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						CAD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						SGD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-green text-white rounded-[100%]">
							<FaCheck />
						</div>
						CHF
					</li>
				</ul>
				<Button
					btnText="Start Earning"
					className="border border-black text-lg py-4 rounded-md w-full"
				/>
			</div>
			<div className="bg-green py-14 px-10 text-black border border-t-4">
				<h3 className="font-bold text-2xl mb-5">Standard Account</h3>
				<p className="text-xl mb-8">Leverage up to 500:1</p>
				<p className="text-xl mb-8">Spreads from 1.0 pips</p>
				<p className="text-xl mb-8">AU $0.00 Commission per side</p>
				<p className="text-xl font-medium mb-8">Available Base Currencies</p>
				<ul className="grid grid-cols-3 gap-5 mb-8">
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						AUD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						USD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						EUR
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						GBP
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						NZD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						CAD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						SGD
					</li>
					<li className="flex items-center">
						<div className="flex items-center justify-center mr-2 p-1 bg-[#e8f369] text-green rounded-[100%]">
							<FaCheck />
						</div>
						CHF
					</li>
				</ul>
				<Button btnText="Start Earning" className="bg-[#e8f369] text-xl py-4 rounded-md w-full" />
			</div>
		</div>
	);
}
