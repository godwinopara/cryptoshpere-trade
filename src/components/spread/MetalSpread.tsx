export default function MetalSpread() {
	return (
		<section>
			<h2 className="text-3xl font-bold my-10">Metals Spread</h2>
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
										<th scope="col" className="border-r px-6 py-4">
											Minimum
										</th>
										<th scope="col" className="border-r px-6 py-4">
											Average
										</th>
									</tr>
								</thead>
								<tbody>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">XAUUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.06</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.16</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">XAUUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.06</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.16</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium ">XAGUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.12</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.22</td>
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
