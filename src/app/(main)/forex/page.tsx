"use client";

import { useEffect } from "react";
import meta4 from "public/images/meta4.jpg";
import meta5 from "public/images/meta5.jpg";
import gotrader from "public/images/go-trader.jpg";
import Image from "next/image";

export default function ForexCFD() {
	useEffect(() => {
		const init = async () => {
			const { Tab, initTE } = await import("tw-elements");
			initTE({ Tab });
		};
		init();
	}, []);

	return (
		<>
			<section className="px-6 min-h-[50vh] bg-black4 flex items-center justify-center xl:min-h-[70vh] bg-forexbg bg-cover bg-no-repeat bg-right relative lg:px-0">
				<div className="bg-black absolute top-0 left w-full h-full opacity-70"></div>
				<div className="text-center text-white1 z-20 relative">
					<h1 className="text-4xl md:text-6xl font-extrabold mb-3">Forex</h1>
					<p className="max-w-4xl md:text-xl">
						Forex brings the opportunity of the world’s largest, most liquid market. We elevate your
						trading with 50+ currency pairs, competitive spreads, powerful tools and comprehensive
						education.
					</p>
				</div>
			</section>

			<section className="max-w-desktop mx-auto py-20 px-6 xl:px-0">
				<h2 className="text-center text-2xl lg:text-4xl font-extrabold mb-20">
					Trading Forex with Universal Cryptoshpere Trade
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div>
						<h3 className="font-bold text-xl mb-3">50+ currency pairs</h3>
						<p className="text-lg">
							Trade popular Forex Pairs like EURUSD, USDJPY, USDAUD and GBPUSD all from one account.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-3">Tight, competitive spreads</h3>
						<p className="text-lg">
							Universal Cryptosphere offers variable spreads on a wide range of markets from as low
							as 0.0 pips on GO Plus accounts.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-3">Flexible leverage</h3>
						<p className="text-lg">You can trade with leverage up to 500:1 on GO Plus accounts </p>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-3">24/5 hour trading</h3>
						<p className="text-lg">
							Universal Cryptosphere Trade provides personalised multilingual customer support 24/5
							to help you with all your trading needs.
						</p>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-3">Commission-free, low-cost dealing</h3>
						<p className="text-lg">
							With our commission-free Standard account, you can access micro, mini and standard FX
							contract sizes
						</p>
					</div>
					<div>
						<h3 className="font-bold text-xl mb-3">Access to EAs and smart tools</h3>
						<p className="text-lg">
							Use powerful tools and Expert Advisors (EAs) to analyse markets and trading signals
							plus execute flexible contract sizes
						</p>
					</div>
				</div>
			</section>

			<section className="bg-black text-white py-20 px-6 xl:px-0">
				<div className="max-w-desktop mx-auto text-center">
					<h2 className="text-2xl lg:text-4xl font-extrabold max-w-2xl mx-auto mb-5">
						Trade Foreign Exchange movement on powerful platforms
					</h2>
					<p className="lg:text-lg max-w-4xl mx-auto">
						Trade the world’s largest, most liquid market. Currencies are traded 24 hours a day
						across a range of international centres, meaning opportunities are always on. Universal
						Cryptosphere Trade is one of Australia’s original MetaTrader 4 Forex brokers, giving you
						a world class Forex market experience.
					</p>
				</div>
			</section>

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

			<section className="mt-20 py-20 max-w-desktop mx-auto px-6 xl:px-0">
				<h2 className="text-center font-extrabold text-2xl xl:text-4xl mb-14">
					Integrated platform power
				</h2>
				<div className="grid lg:grid-cols-3 gap-10">
					<div>
						<Image src={meta4} alt="meta 4" />
						<h3 className="font-bold text-2xl my-5">MetaTrader 4</h3>
						<p className="text-lg">
							A popular platform with new and expert traders for trading Forex, analysing markets
							and using EAs.
						</p>
					</div>
					<div>
						<Image src={meta5} alt="meta 4" />
						<h3 className="font-bold text-2xl my-5">MetaTrader 5</h3>
						<p className="text-lg">
							This powerful multi-asset platform lets you trade Forex, Shares and Futures as CFDs.
						</p>
					</div>
					<div>
						<Image src={gotrader} alt="meta 4" />
						<h3 className="font-bold text-2xl my-5">GO WebTrader</h3>
						<p className="text-lg">
							A simplified MT4 and MT5 version allowing you to access your trading account from your
							browser.
						</p>
					</div>
				</div>
			</section>

			<section className="py-20 max-w-4xl mx-auto">
				<h2 className="text-center font-extrabold text-4xl mb-14">Forex Spreads</h2>
				<div id="accordionFlushExample">
					<div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white ">
						<h2 className="mb-0" id="flush-headingOne">
							<button
								className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-lg xl:text-xl font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none   [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
								type="button"
								data-te-collapse-init
								data-te-target="#flush-collapseOne"
								aria-expanded="false"
								aria-controls="flush-collapseOne"
							>
								Forex Spread
								<span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</span>
							</button>
						</h2>
						<div
							id="flush-collapseOne"
							className="!visible border-0"
							data-te-collapse-item
							data-te-collapse-show
							aria-labelledby="flush-headingOne"
							data-te-parent="#accordionFlushExample"
						>
							<div className="px-6 py-4">
								<ol className="list-decimal flex flex-col gap-y-5">
									<li>
										The trading hours for Forex (“FX”) are from Monday 00:00 to Friday 24:00
										(Platform time). Please be mindful of public holidays as trading times may
										change.
									</li>
									<li>
										Our Forex pairs are spread-based only for Standard GO Account holders. GO Plus+
										Account holders receive lower spreads and fixed monetary commissions.
									</li>
									<li>
										Our FX prices are derived from various quotes by our liquidity providers and
										include Limitless Trade Ltd own spread. Our spreads are variable.
									</li>
									<li>
										Your profits and losses are realised in the second named (terms) currency of the
										pair you are trading. If this currency is different to your account currency,
										your realised profit and loss will be converted based on the spot rate at the
										time of conversion.
									</li>
									<li>
										If you have one or more FX positions open at 24:00 (Platform time), there will
										be a daily Swap adjustment to your position.
									</li>
									<li>
										For open FX position(s) on a Wednesday at 24:00 (Platform time), the Swap
										adjustment will be for 3 days instead of 1. This is to cover settlement of
										trades over the weekend. Please be mindful of public holidays as these may
										change.
									</li>
								</ol>
							</div>
						</div>
					</div>
					<div className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white">
						<h2 className="mb-0" id="flush-headingTwo">
							<button
								className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-lg lg:text-xl font-bold text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)]"
								type="button"
								data-te-collapse-init
								data-te-collapse-collapsed
								data-te-target="#flush-collapseTwo"
								aria-expanded="false"
								aria-controls="flush-collapseTwo"
							>
								How do I calculate my FX margin requirement?
								<span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										className="h-6 w-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M19.5 8.25l-7.5 7.5-7.5-7.5"
										/>
									</svg>
								</span>
							</button>
						</h2>
						<div
							id="flush-collapseTwo"
							className="!visible hidden border-0"
							data-te-collapse-item
							aria-labelledby="flush-headingTwo"
							data-te-parent="#accordionFlushExample"
						>
							<div className="px-6 py-4 text-lg">
								<p>
									To calculate the FX margin requirement, you will require the following formula:
								</p>
								<br />
								<p>(Market quote * Volume) / Leverage = $Margin Requirement</p>
								<br />
								<strong className="block">Example</strong>
								<br />
								<p>
									The current EURUSD price is quoted as 1.13729, and we would like to trade one
									standard lot (100,000) using our account leverage of 1:100{" "}
								</p>
								<br />
								<p>The calculation would be (1.13729 * 100,000) / 100 = -$1137.30 USD</p>
								<br />
								<p>
									Note: If the base currency of your account is not in USD, this amount can simply
									be converted into the corresponding currency AUD, GBP, NZD etc.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
