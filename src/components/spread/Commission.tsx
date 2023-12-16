export default function Commission() {
	return (
		<section>
			<div>
				<div className="my-10">
					<h2 className="text-2xl font-bold mb-3 xl:text-3xl">GO Plus+ Account Commissions</h2>
					<span className="text-lg">AUD (Australian Dollar)A$3.00</span>
				</div>
				<div className="flex flex-col">
					<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
							<div className="overflow-hidden">
								<table className="min-w-full border text-center font-light">
									<thead className="border-b font-medium">
										<tr>
											<th scope="col" className="border-r px-6 py-4">
												Base Currency
											</th>
											<th scope="col" className="border-r px-6 py-4">
												Commission per side (100,000)
											</th>
										</tr>
									</thead>
									<tbody>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium">
												USD (US Dollar)
											</td>
											<td className="whitespace-nowrap px-6 py-4">US2.50</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium">
												EUR (Euro)
											</td>
											<td className="whitespace-nowrap px-6 py-4">€2.00</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												GBP (Pound Sterling)
											</td>
											<td className="whitespace-nowrap px-6 py-4">£2.00</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												SGD (Singapore Dollar)
											</td>
											<td className="whitespace-nowrap px-6 py-4">SG$3.50</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												CAD (Canadian Dollar)
											</td>
											<td className="whitespace-nowrap px-6 py-4">CA$3.00</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												NZD (New Zealand Dollar)
											</td>
											<td className="whitespace-nowrap px-6 py-4">NZ$3.50</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												CHF (Swiss Franc)
											</td>
											<td className="whitespace-nowrap px-6 py-4">FR2.50</td>
										</tr>
										<tr className="border-b">
											<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">
												HKD (Hong Kong Dollar)
											</td>
											<td className="whitespace-nowrap px-6 py-4">HK$20</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
