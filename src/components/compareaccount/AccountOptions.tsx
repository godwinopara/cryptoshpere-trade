import React from "react";
import { FaCheck } from "react-icons/fa";

export default function AccountOptions() {
	return (
		<section className="flex flex-col max-w-[1100px] mx-auto py-20">
			<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
					<div className="overflow-hidden">
						<table className="min-w-full text-left">
							<thead className="border-b bg-gray font-bold text-lg text-left">
								<tr>
									<th scope="col" className=" px-6 py-4"></th>
									<th scope="col" className="px-6 py-4">
										Plus+ Account
									</th>
									<th scope="col" className="px-6 py-4">
										Standard Account
									</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">24/5 Support</td>
									<td className="whitespace-nowrap  px-6 py-4 text-center text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">
										Dedicated Account Manager
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Spread</td>
									<td className="whitespace-nowrap  px-6 py-4">From 0.0 pips</td>
									<td className="whitespace-nowrap  px-6 py-4">From 1.0 pip</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Commision</td>
									<td className="whitespace-nowrap  px-6 py-4">A$3.00 per side on standard lot</td>
									<td className="whitespace-nowrap  px-6 py-4">A$0.00</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Available Markets</td>
									<td className="whitespace-nowrap  px-6 py-4">
										Wide range of FX pairs, Shares, Indices & Commodities
									</td>
									<td className="whitespace-nowrap  px-6 py-4">
										Wide range of FX pairs, Shares, Indices & Commodities
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Minimum Trade Size</td>
									<td className="whitespace-nowrap  px-6 py-4">0.01 lots</td>
									<td className="whitespace-nowrap  px-6 py-4">0.01 lots</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Leverage</td>
									<td className="whitespace-nowrap  px-6 py-4"> Up to 500:1</td>
									<td className="whitespace-nowrap  px-6 py-4">Up to 500:1</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Trading tools</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">EAs Allowed</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">FREE VPS</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr className="border-b">
									<td className="whitespace-nowrap  px-6 py-4 font-medium">Scalping Allowed</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
									<td className="whitespace-nowrap  px-6 py-4 text-green">
										<FaCheck />
									</td>
								</tr>
								<tr>
									<td className="whitespace-nowrap  px-6 py-4 font-medium">
										Available Base Currencies
									</td>
									<td className="whitespace-nowrap  px-6 py-4">
										AUD, USD, EUR, GBP, NZD, CAD, SGD, CHF, HKD
									</td>
									<td className="whitespace-nowrap  px-6 py-4">
										AUD, USD, EUR, GBP, NZD, CAD, SGD, CHF, HKD
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}
