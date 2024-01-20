export default function ForexPairs() {
	return (
		<section className="max-w-desktop mx-auto flex justify-center mt-32 px-6 xl:px-0">
			<div>
				<h2 className="text-center font-bold text-2xl lg:text-4xl mb-8">Range of Forex Pairs</h2>

				<ul
					className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
					role="tablist"
					data-te-nav-ref
				>
					<li role="presentation">
						<a
							href="#tabs-major"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-major"
							data-te-nav-active
							role="tab"
							aria-controls="tabs-major"
							aria-selected="true"
						>
							Major FX Pairs
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-minor"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-minor"
							role="tab"
							aria-controls="tabs-minor"
							aria-selected="false"
						>
							Minor FX Pairs
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-exotic"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue "
							data-te-toggle="pill"
							data-te-target="#tabs-exotic"
							role="tab"
							aria-controls="tabs-exotic"
							aria-selected="false"
						>
							Exotic FX Pairs
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-metal"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-metal"
							role="tab"
							aria-controls="tabs-metal"
							aria-selected="false"
						>
							Metal Pairs
						</a>
					</li>
				</ul>

				<div className="mb-6">
					<div
						className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
						id="tabs-major"
						role="tabpanel"
						aria-labelledby="tabs-major-tab"
						data-te-tab-active
					>
						<h3 className="text-3xl font-extrabold my-15">Major FX Pairs</h3>

						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Currency Pairs
													</th>
													<th scope="col" className="px-6 py-4">
														Average Pairs
													</th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AUDUSD</td>
													<td className="whitespace-nowrap px-6 py-4">0.1</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDCAD</td>
													<td className="whitespace-nowrap px-6 py-4">0.2</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURUSD</td>
													<td className="whitespace-nowrap px-6 py-4">0.1</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDJPY</td>
													<td className="whitespace-nowrap px-6 py-4">0.2</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDCHF</td>
													<td className="whitespace-nowrap px-6 py-4">0.3</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">GBPUSD</td>
													<td className="whitespace-nowrap px-6 py-4">0.3</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						<p className="text-center my-10">
							*Average spread is calculated based on the average of the historical spread. Spreads
							are variable.
						</p>
					</div>
					<div
						className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
						id="tabs-minor"
						role="tabpanel"
						aria-labelledby="tabs-minor-tab"
					>
						<h3 className="text-3xl font-extrabold my-15">Minor FX Pairs</h3>
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Forex Pairs
													</th>
													<th scope="col" className="px-6 py-4"></th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AUDUSD</td>
													<td className="whitespace-nowrap px-6 py-4">AUDJPY</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDSGD</td>
													<td className="whitespace-nowrap px-6 py-4">CHFJPY</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURCAD</td>
													<td className="whitespace-nowrap px-6 py-4">EURGBP</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURNZD</td>
													<td className="whitespace-nowrap px-6 py-4">GBPCAD</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">GBPJPY</td>
													<td className="whitespace-nowrap px-6 py-4">NZDUSD</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AUDCHF</td>
													<td className="whitespace-nowrap px-6 py-4">AUDNZD</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">CADJPY</td>
													<td className="whitespace-nowrap px-6 py-4">EURAUD</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURCHF</td>
													<td className="whitespace-nowrap px-6 py-4">EURJPY</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">GBPAUD</td>
													<td className="whitespace-nowrap px-6 py-4">GBPCHF</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">GBPNZD</td>
													<td className="whitespace-nowrap px-6 py-4">NZDJPY</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
						id="tabs-exotic"
						role="tabpanel"
						aria-labelledby="tabs-exotic-tab"
					>
						<h3 className="text-3xl font-extrabold my-15">Exotic FX Pairs</h3>
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Forex Pairs
													</th>
													<th scope="col" className="px-6 py-4"></th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AUDHKD</td>
													<td className="whitespace-nowrap px-6 py-4">USDTRY</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURMXN</td>
													<td className="whitespace-nowrap px-6 py-4">USDZAR</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">EURTRY</td>
													<td className="whitespace-nowrap px-6 py-4">EURDKK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDCNH</td>
													<td className="whitespace-nowrap px-6 py-4">EURHUF</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDDKK</td>
													<td className="whitespace-nowrap px-6 py-4">EURNOK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDHKD</td>
													<td className="whitespace-nowrap px-6 py-4">EURPLN</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDMXN</td>
													<td className="whitespace-nowrap px-6 py-4">EURSEK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDNOK</td>
													<td className="whitespace-nowrap px-6 py-4">USDHUF</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USDSEK</td>
													<td className="whitespace-nowrap px-6 py-4">USDPLN</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AUDCNH</td>
													<td className="whitespace-nowrap px-6 py-4">CADCHF</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">NZDCAD</td>
													<td className="whitespace-nowrap px-6 py-4">NZDCHF</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
						id="tabs-metal"
						role="tabpanel"
						aria-labelledby="tabs-metal-tab"
					>
						<h3 className="text-3xl font-extrabold my-15">Exotic FX Pairs</h3>
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Metal Pairs
													</th>
													<th scope="col" className="px-6 py-4"></th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">XAGUSD</td>
													<td className="whitespace-nowrap px-6 py-4"></td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">XAUUSD</td>
													<td className="whitespace-nowrap px-6 py-4"></td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
