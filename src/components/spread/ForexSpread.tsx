export default function ForexSpread() {
	return (
		<section>
			<h3 className="text-3xl font-bold my-10">Forex Spreads</h3>
			<div className="flex flex-col overflow-x-auto">
				<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div className="overflow-x-auto">
							<table className="min-w-full overflow-auto border text-center font-light">
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
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">AUDCAD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.03</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.83</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">AUDCHF</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.8</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.6</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">AUDJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.7</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">AUDNZD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">AUDUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.2</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">CADJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.7</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">CHFJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURAUD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURCAD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.9</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURCHF</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.7</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURGBP</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.4</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURNZD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.4</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">EURUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.2</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPAUD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.4</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPCAD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPCHF</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.4</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.2</td>
									</tr>
									<tr className="border">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPNZD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.7</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">2.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">GBPUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.5</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.3</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">NZDUSD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.3</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">NZDCAD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.8</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">NZDCHF</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.8</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.6</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">NZDJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.7</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.5</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USDCAD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.3</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USDCHF</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.4</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.2</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USDCNH</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">5.32</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">6.12</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USDJPY</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">0.2</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1</td>
									</tr>
									<tr className="border-b">
										<td className="whitespace-nowrap border-r px-6 py-4 font-medium">USDSGD</td>
										<td className="whitespace-nowrap px-6 py-4">0.0</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.05</td>
										<td className="whitespace-nowrap px-6 py-4">0.8</td>
										<td className="whitespace-nowrap border-r px-6 py-4">1.85</td>
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
