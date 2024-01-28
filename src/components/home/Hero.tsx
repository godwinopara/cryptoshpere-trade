"use client";

import { TickerTape } from "react-ts-tradingview-widgets";
import Button from "../shared/Button";
import VideoBackground from "../shared/VideoBackground";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import referralBonusImg from "public/images/referral-img.jpg";

export default function Hero() {
	useEffect(() => {
		const init = async () => {
			const { Collapse, Dropdown, Ripple, initTE } = await import("tw-elements");
			initTE({ Collapse, Dropdown, Ripple });
		};
		init();
	}, []);

	return (
		<>
			<div className="relative xl:min-h-[90vh]">
				<div className="!visible hidden bg-[#e2e5ec]" id="referral" data-te-collapse-item>
					<div className="px-6 max-w-desktop mx-auto py-10 xl:px-4 lg:flex justify-between items-center ">
						<div className="lg:w-[55%]">
							<h2 className="font-extrabold text-xl lg:text-3xl mb-5">
								Receive an extra bonus up to US$10,000 in 3 months* with Cryptosphere Partner
							</h2>
							<p className="lg:text-lg mb-10">
								For a limited time only, Universal Cryptosphere Trade is proud to announce the
								Cryptosphere Partner Campaign for Referrers! Partners, will have the opportunity to
								earn extra bonus on top of your rebate, simply by referring new clients. Your
								business can go further with Crytosphere Partner by Universal Cryptosphere Trade*.
								T&Cs apply.
							</p>
							<Link
								className="bg-darkBlue text-white py-4 rounded-md text-lg px-10 block w-full xl:inline text-center"
								href="/referral"
							>
								Learn More
							</Link>
						</div>
						<div className="mt-10 lg:mt-0 lg:w-[39%]">
							<Image src={referralBonusImg} alt="referal bonus" className="mx-auto" />
						</div>
					</div>
				</div>
				<button
					className="h-10 w-full bg-[#ff5a23] font-extrabold text-sm"
					type="button"
					data-te-collapse-init
					data-te-target="#referral"
					aria-controls="referral"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					REFERRAL PARTNER BONUS PROMOTION
				</button>
				<VideoBackground>
					<div className="min-h-[85vh] md:min-h-[50svh] xl:min-h-[85vh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
						<div className="px-6 xl:px-0 grid text-center lg:text-left lg:flex lg:gap-20 items-center max-w-desktop mx-auto">
							<div className="mb-20 lg:mb-0 xl:w-[55%]">
								<div className="mb-10">
									<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">
										Digital assets, investments and trading
									</h1>
									<p className="text-lg mb-4 xl:text-xl">
										Join millions of users, from beginners to professionals, who use Universal
										Cryptosphere Trade to purchase crypto, trade, and manage their investments in a
										smarter way.
									</p>
								</div>
								<div className="lg:flex items-center gap-2">
									<Link href="https://universalcryptospheredashboard.vercel.app/auth/signup">
										<Button btnText="Create Account" className="bg-green" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</VideoBackground>
			</div>
			<div className="relative z-50">
				<TickerTape colorTheme="light"></TickerTape>
			</div>
		</>
	);
}
