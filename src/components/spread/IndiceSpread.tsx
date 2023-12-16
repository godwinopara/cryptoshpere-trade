export default function IndiceSpread() {
	return (
		<section>
			<h3 className="text-3xl font-bold my-10">Indice Spreads</h3>
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
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">ASX200</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.6</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.6</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">WS30</td>
										<td className="whitespace-nowrap px-6 py-4">1.6</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.2</td>
										<td className="whitespace-nowrap px-6 py-4">1.6</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">US500</td>
										<td className="whitespace-nowrap px-6 py-4">0.5</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.5</td>
										<td className="whitespace-nowrap px-6 py-4">0.5</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">NDX100</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">US2000</td>
										<td className="whitespace-nowrap px-6 py-4">0.3</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.6</td>
										<td className="whitespace-nowrap px-6 py-4">0.3</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.6</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">FTSE100</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.3</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.3</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">DAX30</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.7</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.7</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">CAC40</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">1</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">ESP35</td>
										<td className="whitespace-nowrap px-6 py-4">7</td>
										<td className="whitespace-nowrap border-r px-6 py-4">7</td>
										<td className="whitespace-nowrap px-6 py-4">7</td>
										<td className="whitespace-nowrap border-r px-6 py-4">7</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">STOXX50</td>
										<td className="whitespace-nowrap px-6 py-4">1.6</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2</td>
										<td className="whitespace-nowrap px-6 py-4">1.6</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">HK50</td>
										<td className="whitespace-nowrap px-6 py-4">4</td>
										<td className="whitespace-nowrap border-r px-6 py-4">5</td>
										<td className="whitespace-nowrap px-6 py-4">4</td>
										<td className="whitespace-nowrap border-r px-6 py-4">5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">JP225</td>
										<td className="whitespace-nowrap px-6 py-4">7</td>
										<td className="whitespace-nowrap border-r px-6 py-4">11.3</td>
										<td className="whitespace-nowrap px-6 py-4">7</td>
										<td className="whitespace-nowrap border-r px-6 py-4">11.3</td>
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
