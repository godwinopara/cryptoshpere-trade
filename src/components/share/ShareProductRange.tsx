export default function ShareProductRange() {
	return (
		<section className="max-w-5xl mx-auto flex justify-center mt-32 px-6 xl:px-0">
			<div>
				<h2 className="text-center font-bold text-2xl lg:text-4xl mb-8">Share CFD product range</h2>

				<ul
					className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
					role="tablist"
					data-te-nav-ref
				>
					<li className="hidden lg:block" role="presentation">
						<a
							href="#tabs-share-cost"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-share-cost"
							data-te-nav-active
							role="tab"
							aria-controls="tabs-share-cost"
							aria-selected="true"
						>
							share cfd costs
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-au-shares"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-au-shares"
							role="tab"
							aria-controls="tabs-au-shares"
							aria-selected="false"
						>
							Au shares
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-us-shares"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue "
							data-te-toggle="pill"
							data-te-target="#tabs-us-shares"
							role="tab"
							aria-controls="tabs-us-shares"
							aria-selected="false"
						>
							us shares
						</a>
					</li>
					<li role="presentation">
						<a
							href="#tabs-hk-shares"
							className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-darkBlue data-[te-nav-active]:text-darkBlue"
							data-te-toggle="pill"
							data-te-target="#tabs-hk-shares"
							role="tab"
							aria-controls="tabs-hk-shares"
							aria-selected="false"
						>
							hk shares
						</a>
					</li>
				</ul>

				<div className="mb-6">
					<div
						className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
						id="tabs-share-cost"
						role="tabpanel"
						aria-labelledby="tabs-share-cost-tab"
						data-te-tab-active
					>
						<h3 className="text-3xl font-extrabold my-15">Share CFD Costs</h3>
						<div className="text-lg">
							<p>
								Share CFDs are traded at the real market price. We take a small commission when you
								open the position, and then again when you close it.
							</p>
							<br />
							<p>
								Rebate requirement based on Share CFD trades of the specified country only. Market
								data fees are charged on 1st of every calendar month and reversed at the end of each
								calendar month if rebate requirement is met on a particular exchange.
							</p>
							<br />
							<p>
								To activate Share CFD data feeds, login to the Client Portal. Please note that you
								can only trade Share CFDs with Limitless Trade Ltd on the MetaTrader 5 platform.
							</p>
							<br />
							<p>
								A breakdown of the costs associated with Share CFD trading with Limitless Trade Ltd
								is provided in the table below:
							</p>
						</div>
						<br />
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-x-auto">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Country
													</th>
													<th scope="col" className="px-6 py-4">
														Market Data Fee
													</th>
													<th scope="col" className="px-6 py-4">
														Rebate Requirement
													</th>
													<th scope="col" className="px-6 py-4">
														Commission Per Side
													</th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Australia</td>
													<td className="whitespace-nowrap px-6 py-4">AUD$22.00</td>
													<td className="whitespace-nowrap px-6 py-4">4 Trades</td>
													<td className="whitespace-nowrap px-6 py-4">0.08%</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">USA</td>
													<td className="whitespace-nowrap px-6 py-4">US$0.00</td>
													<td className="whitespace-nowrap px-6 py-4">0 Trades</td>
													<td className="whitespace-nowrap px-6 py-4">US$0.02 per share</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Hong Kong</td>
													<td className="whitespace-nowrap px-6 py-4">HK$120.00</td>
													<td className="whitespace-nowrap px-6 py-4"> 4 Trades</td>
													<td className="whitespace-nowrap px-6 py-4">
														0.18%* with minimum of HK$50/AUD$10/EUR$6
														<br />
														/GBP$6/CHF$7/USD$7/NZD$10/CAD$9/SGD$10{" "}
													</td>
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
						id="tabs-au-shares"
						role="tabpanel"
						aria-labelledby="tabs-au-shares-tab"
					>
						<h3 className="text-3xl font-extrabold my-15 px-6">AU Shares</h3>
						<p className="text-lg px-6">
							See some of the most popular share cfds on the Australian Stock Exchange available
							through the MT5 platform.
						</p>
						<br />
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-x-auto">
										<table className="min-w-full text-left text-sm font-light ">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr>
													<th scope="col" className="px-6 py-4">
														Company
													</th>
													<th scope="col" className="px-6 py-4">
														Symbols
													</th>
												</tr>
											</thead>
											<tbody>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														Afterpay Touch Group Ltd
													</td>
													<td className="whitespace-nowrap px-6 py-4">APT</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														BHP Billiton Ltd
													</td>
													<td className="whitespace-nowrap px-6 py-4">BHP</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														Qantas Airways Ltd
													</td>
													<td className="whitespace-nowrap px-6 py-4">QAN</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4 font-medium">
														Commonwealth Bank of Australia Ltd
													</td>
													<td className="whitespace-nowrap px-6 py-4">CBA</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4 font-medium">Westpac Ltd</td>
													<td className="whitespace-nowrap px-6 py-4">WBC</td>
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
						id="tabs-us-shares"
						role="tabpanel"
						aria-labelledby="tabs-us-shares-tab"
					>
						<h3 className="text-3xl font-extrabold my-15">US Shares</h3>
						<p className="text-lg">
							See some of the most popular share cfds on the New York Stock Exchange available
							through the MT5 platform.
						</p>
						<br />
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Company
													</th>
													<th scope="col" className="px-6 py-4">
														Symbol
													</th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">The Walt Disney Company</td>
													<td className="whitespace-nowrap px-6 py-4">DIS</td>
												</tr>

												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Uber Technologies Inc.</td>
													<td className="whitespace-nowrap px-6 py-4">UBER</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">
														Alibaba Group Holding Ltd.
													</td>
													<td className="whitespace-nowrap px-6 py-4">BABA</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">General Motors Co</td>
													<td className="whitespace-nowrap px-6 py-4">GM</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Twitter Inc.</td>
													<td className="whitespace-nowrap px-6 py-4">TWTR</td>
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
						id="tabs-hk-shares"
						role="tabpanel"
						aria-labelledby="tabs-hk-shares-tab"
					>
						<h3 className="text-3xl font-extrabold my-15">HK Shares</h3>
						<p className="text-lg">
							See some of the most popular share cfds on the Hong Kong Stock Exchange available
							through the MT5 platform.
						</p>
						<br />
						<div className="flex flex-col">
							<div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
									<div className="overflow-hidden">
										<table className="min-w-full text-left text-sm font-light">
											<thead className="border-b font-medium dark:border-neutral-500">
												<tr className="bg-neutral-400 text-lg">
													<th scope="col" className="px-6 py-4">
														Company
													</th>
													<th scope="col" className="px-6 py-4">
														Symbol
													</th>
												</tr>
											</thead>
											<tbody className="font-normal text-base">
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Tencent Holdings Ltd</td>
													<td className="whitespace-nowrap px-6 py-4">700.HK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Alibaba Group Holding Ltd</td>
													<td className="whitespace-nowrap px-6 py-4"> 9988.HK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">AIA Group Ltd</td>
													<td className="whitespace-nowrap px-6 py-4">1299.HK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">CLP Holdings Ltd</td>
													<td className="whitespace-nowrap px-6 py-4"> 2.HK</td>
												</tr>
												<tr className="border-b dark:border-neutral-500">
													<td className="whitespace-nowrap px-6 py-4">Meituan</td>
													<td className="whitespace-nowrap px-6 py-4">3690.HK</td>
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
