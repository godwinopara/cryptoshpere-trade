export default function ShareAccodion() {
	return (
		<section className="py-20 max-w-4xl mx-auto">
			<h2 className="text-center font-extrabold text-4xl mb-14">Share CFD trading FAQS</h2>
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
							Share CFDs trading vs. standard Share trading.
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
							<p>
								When you directly trade a share, you are buying and selling a small ownership of a
								publicly-listed company at prices determined by the market. Share CFDs differ in
								that they allow you to speculate on the share’s price without taking actual
								ownership of the underlying asset. This allows you to trade both long and short,
								whereas only long trading is available with standard share trading.
							</p>
							<br />
							<p>
								Additionally, because CFDs are leveraged products, you will only need to deposit a
								small portion of the full value of the trade in order to open a position. While this
								will increase any profits, it also means losses can exceed deposits. Standard share
								trading requires you to pay the full cost of your position upfront, so you cannot
								lose more than your investment.
							</p>
							<br />
							<p>See our full Share CFDs Product Range for the AU, US and HK.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
