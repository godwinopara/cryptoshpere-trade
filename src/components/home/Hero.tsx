"use client";

import { TickerTape } from "react-ts-tradingview-widgets";
import Button from "../shared/Button";

export default function Hero() {
	return (
		<>
			<div className="bg-black bg-pattern min-h-[85svh] md:min-h-[50svh] xl:min-h-[85svh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
				<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
					<div className="mb-20 lg:mb-0">
						<div className="mb-10">
							<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">
								Explore global markets differently
							</h1>
							<p className="text-lg mb-4 xl:text-xl">
								Trade the markets with our secure software and stay on top of your account. Trade
								anywhere, anytime and from any device
							</p>
							<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
						</div>
						<div className="lg:flex items-center gap-2">
							<Button btnText="Create Account" className="bg-green" />
						</div>
					</div>
					<div>
						<video autoPlay loop>
							<source
								src="https://static.tradingview.com/static/bundles/chart-big.fb88521d9cf80be23da7.webm"
								type="video/webm"
							/>
							<source
								src="https://static.tradingview.com/static/bundles/chart-big.avc1.e7da14709759f81c9e4b.mp4"
								type="video/webm;codecs=avc1"
							/>
						</video>
					</div>
				</div>
			</div>
			<TickerTape colorTheme="light"></TickerTape>
		</>
	);
}
