export default function FxAccordion() {
	return (
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
									The trading hours for Forex (“FX”) are from Monday 00:00 to Friday 24:00 (Platform
									time). Please be mindful of public holidays as trading times may change.
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
									pair you are trading. If this currency is different to your account currency, your
									realised profit and loss will be converted based on the spot rate at the time of
									conversion.
								</li>
								<li>
									If you have one or more FX positions open at 24:00 (Platform time), there will be
									a daily Swap adjustment to your position.
								</li>
								<li>
									For open FX position(s) on a Wednesday at 24:00 (Platform time), the Swap
									adjustment will be for 3 days instead of 1. This is to cover settlement of trades
									over the weekend. Please be mindful of public holidays as these may change.
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
							<p>To calculate the FX margin requirement, you will require the following formula:</p>
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
								Note: If the base currency of your account is not in USD, this amount can simply be
								converted into the corresponding currency AUD, GBP, NZD etc.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
