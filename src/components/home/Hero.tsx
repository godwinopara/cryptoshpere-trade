"use client";

import Image from "next/image";
import heroImg from "public/images/homepage-hero-img.png";
import { TickerTape } from "react-ts-tradingview-widgets";

export default function Hero() {
	return (
		<>
			<div className="bg-homeHeroBg bg-cover bg-center bg-darkBlue text-white pt-10 xl:pb-10">
				<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 items-center max-w-desktop mx-auto">
					<div className="mb-20 lg:mb-0">
						<div className="mb-10">
							<h1 className="text-4xl font-semibold lg:text-46 lg:leading-56 lg:font-extrabold mb-5">
								A new way to explore the global markets
							</h1>
							<p className="text-lg mb-4">
								Trade the markets with our secure software and stay on top of your account. Trade
								anywhere, anytime and from any device
							</p>
							<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
						</div>
						<div className="md:flex items-center gap-2">
							<button className="block w-full mb-2 lg:mb-0 lg:inline-block lg:w-auto border-white border rounded-sm py-3 px-6 font-bold mr-5">
								Login Now
							</button>
							<button className="block w-full lg:inline-block lg:w-auto bg-darkBlue py-3 px-6 font-bold rounded-sm">
								Open Account
							</button>
						</div>
					</div>
					<div>
						<Image src={heroImg} alt="broker image" className="md:w-[60%] mx-auto lg:w-full" />
					</div>
				</div>
			</div>
			<TickerTape colorTheme="light"></TickerTape>
		</>
	);
}
