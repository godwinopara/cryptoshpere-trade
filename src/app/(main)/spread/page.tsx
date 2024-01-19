import Button from "@/components/shared/Button";
import Commission from "@/components/spread/Commission";
import CommoditySpread from "@/components/spread/CommoditySpread";
import ForexSpread from "@/components/spread/ForexSpread";
import FutureSpread from "@/components/spread/FutureSpread";
import IndiceSpread from "@/components/spread/IndiceSpread";
import MetalSpread from "@/components/spread/MetalSpread";
import Image from "next/image";
import Link from "next/link";
import mobile from "public/images/trading-mobile.png";

export default function Spreads() {
	return (
		<>
			<section className="bg-black bg-pattern min-h-[85vh] md:min-h-[50vh] xl:min-h-[100vh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
				<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
					<div className="mb-20 lg:mb-0">
						<div className="mb-10">
							<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">Spreads</h1>
							<p className="text-lg mb-4 lg:xit'                                                                                                                                                                                                                       :text-xl">
								Universal Cryptosphere Trade offers variable spreads on a whole range of markets
								which include Forex, Indices, Metals, Commodities and more.
							</p>
							<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
						</div>
						<div className="lg:flex items-center gap-2">
							<Link href="https://universalcryptospheredashboard.vercel.app/auth/signup">
								<Button btnText="Create Account" className="bg-green" />
							</Link>
						</div>
					</div>
					<div>
						<Image src={mobile} alt="mobile" className="w-1/2 mx-auto" />
					</div>
				</div>
			</section>
			<div className="px-6 xl:grid xl:grid-cols-3 gap-x-32 max-w-desktop mx-auto">
				<div className="col-span-2">
					<div className="text-lg my-20">
						<h2 className="font-bold text-2xl xl:text-3xl mb-5">
							Spreads from 0.0 pips with Universal Cryptosphere Trade
						</h2>
						<p className="mb-5">
							Our spreads are aggregated from 22+ Tier 1 and 2 liquidity providers making them go as
							<strong> low as 0.0 pips.</strong> Universal Cryptosphere Trade average spreads for
							our Standard and GO Plus+ accounts are listed below.
						</p>
						<span className="italic text-sm xl:text-base">
							*This data is provided for general information only and is taken over a one month
							period. Prices shown may vary.
						</span>

						<div className="my-10 px-5 text-center bg-black text-white1 py-10 xl:px-0">
							<h3 className="text-2xl font-bold mb-2">GO Plus+ Account</h3>
							<p className="mb-5">
								Raw spreads from 0.0 pips and a great low commission of just USD 2.5 per side
							</p>
							<Link href="https://universalcryptospheredashboard.vercel.app/auth/login">
								<Button btnText="Find Out More" className="border" />
							</Link>
						</div>
					</div>
					<ForexSpread />
					<CommoditySpread />
					<MetalSpread />
					<IndiceSpread />
					<FutureSpread />
					<Commission />
				</div>

				<div className="my-20 grid-cols-1">
					<div className="text-lg bg-white shadow-md px-5 py-10 border-t-2 border-black">
						<h3 className="font-bold text-xl mb-3">We’re here to help</h3>
						<p>Call or email</p>
						<p>
							<strong>info@universalcryptospheretrade.com</strong> to talk about opening a trading
							account.
						</p>
						<br />
						<p>
							<strong>Contact us </strong>24 hours a day 5 days a week for all your trading needs
						</p>
					</div>
				</div>
			</div>
			{/* <div className="grid xl:grid-cols-3 xl:gap-x-32 max-w-desktop mx-auto px-6">
				<div className="col-span-2">
					<div className="text-lg my-20">
						<h2 className="font-bold text-xl xl:text-3xl mb-5">
							Spreads from 0.0 pips with Universal Cryptosphere Trade
						</h2>
						<p className="mb-5">
							Our spreads are aggregated from 22+ Tier 1 and 2 liquidity providers making them go as
							<strong>low as 0.0 pips.</strong> Universal Cryptosphere Trade average spreads for our
							Standard and GO Plus+ accounts are listed below.
						</p>
						<span className="italic">
							*This data is provided for general information only and is taken over a one month
							period. Prices shown may vary.
						</span>

						<div className="my-10 text-center bg-black text-white1 py-10">
							<h3 className="text-2xl font-bold mb-2">GO Plus+ Account</h3>
							<p className="mb-5">
								Raw spreads from 0.0 pips and a great low commission of just USD 2.5 per side
							</p>
							<Button btnText="Find Out More" className="border" />
						</div>
					</div>
					<ForexSpread />
					<CommoditySpread />
					<MetalSpread />
					<IndiceSpread />
					<FutureSpread />
					<Commission />
				</div>

				<div className="my-20">
					<div className="text-lg bg-white shadow-md px-8 py-10 border-t-2 border-black">
						<h3 className="font-bold text-xl mb-3">We’re here to help</h3>
						<p>Call or email</p>
						<p>
							<strong>info@universalcryptospheretrade.com</strong> to talk about opening a trading
							account.
						</p>
						<br />
						<p>
							<strong>Contact us </strong>24 hours a day 5 days a week for all your trading needs
						</p>
					</div>
				</div>
			</div> */}
		</>
	);
}
