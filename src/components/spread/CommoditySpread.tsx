export default function CommoditySpread() {
	return (
		<section className="">
			<h2 className="text-3xl font-bold mb-10">Commodities Spread</h2>
			<div className="flex flex-col">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-hidden">
							<table className="min-w-full border text-center font-light">
								<thead className="border-b font-medium">
									<tr>
										<th scope="col" className="border-r px-6 py-4">
											Symbol
										</th>
										<th colSpan={2} scope="col" className="border-r px-6 py-4">
											GO Plus+
										</th>
										<th colSpan={2} scope="col" className="border-r px-6 py-4">
											Standard Account
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4"></td>
										<td className="whitespace-nowrap px-6 py-4">Minimum</td>

										<td className="whitespace-nowrap border-r px-6 py-4">Average</td>
										<td className="whitespace-nowrap px-6 py-4">Minimum</td>

										<td className="whitespace-nowrap border-r px-6 py-4">Average</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USOUSD</td>
										<td className="whitespace-nowrap px-6 py-4">3</td>
										<td className="whitespace-nowrap border-r px-6 py-4">3</td>
										<td className="whitespace-nowrap px-6 py-4">3.5</td>
										<td className="whitespace-nowrap border-r px-6 py-4">3.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">UKOUSD</td>
										<td className="whitespace-nowrap px-6 py-4">3.1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">3.1</td>
										<td className="whitespace-nowrap px-6 py-4 ">3.6</td>
										<td className="whitespace-nowrap border-r px-6 py-4 ">3.6</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USOil-F</td>
										<td className="whitespace-nowrap px-6 py-4">3.5</td>
										<td className="whitespace-nowrap border-r px-6 py-4">3.8</td>
										<td className="whitespace-nowrap px-6 py-4">3.5</td>
										<td className="whitespace-nowrap border-r px-6 py-4">3.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">UKOil-F</td>
										<td className="whitespace-nowrap px-6 py-4">4</td>
										<td className="whitespace-nowrap border-r px-6 py-4">4.1</td>
										<td className="whitespace-nowrap px-6 py-4">4</td>
										<td className="whitespace-nowrap border-r px-6 py-4">4.1</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
