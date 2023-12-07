import Image from "next/image";
import heroImg from "public/images/homepage-hero-img.png";

export default function Hero() {
	return (
		<div className="bg-homeHeroBg h-screen text-white">
			<div className="grid grid-cols-2 items-center max-w-[1200px] mx-auto">
				<div>
					<div className="mb-12">
						<h1 className="text-46 leading-56 font-extrabold mb-5">
							A new way to explore the global markets
						</h1>
						<p className="text-lg mb-4">
							Trade the markets with our secure software and stay on top of your account. Trade
							anywhere, anytime and from any device
						</p>
						<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
					</div>
					<div>
						<button className="border-white border rounded-sm py-3 px-6 font-bold mr-5">
							Login Now
						</button>
						<button className="bg-darkBlue py-3 px-6 font-bold rounded-sm">Open Account</button>
					</div>
				</div>
				<div>
					<Image src={heroImg} alt="broker image" />
				</div>
			</div>
		</div>
	);
}
