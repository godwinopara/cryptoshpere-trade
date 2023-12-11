import Image from "next/image";
import Link from "next/link";
import meta from "public/images/metatrader.jpg";

export default function Meta() {
	return (
		<section className="py-20 px-4 xl:px-0">
			<div className="max-w-desktop mx-auto grid lg:grid-cols-2 items-center gap-20">
				<div>
					<Image src={meta} alt="meta trader image" />
				</div>
				<div>
					<h2 className="font-extrabold text-3xl text-center lg:text-left lg:text-4xl mb-8">
						Platform power: MetaTrader 4 and MetaTrader 5
					</h2>
					<p className="mb-8 text-lg">
						We’re one of Australia’s first MetaTrader brokers. Our expertise helps you intuitively
						execute trading strategies on market-leading platforms.
					</p>

					<div className="md:grid grid-cols-2">
						<div className="mb-8 lg:mb-0">
							<h3 className="text-xl font-extrabold mb-5">Trading Platforms</h3>
							<ul className="flex flex-col gap-5 text-lg">
								<li>
									<Link href="/meta4">MetaTrader 4 Platform</Link>
								</li>
								<li>
									<Link href="/meta5">MetaTrader 5 Platform</Link>
								</li>
								<li>
									<Link href="/meta4">GO Webtrader</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-extrabold mb-5">Trading Tools</h3>
							<ul className="flex flex-col gap-5 text-lg">
								<li>
									<Link href="/meta4">MetaTrader Genesis</Link>
								</li>
								<li>
									<Link href="/meta5">Autochartist</Link>
								</li>
								<li>
									<Link href="/meta4">Trading Central</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
