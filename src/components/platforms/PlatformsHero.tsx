import Button from "@/components/shared/Button";
import Image from "next/image";
import heroImg from "public/images/funding-bg.png";

export default function PlatformsHero() {
	return (
		<section className="bg-black bg-pattern min-h-[85svh] md:min-h-[50svh] xl:min-h-[85svh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
			<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
				<div className="mb-20 lg:mb-0">
					<div className="mb-10">
						<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">Platforms</h1>
						<p className="text-lg mb-4 lg:xit'                                                                                                                                                                                                                       :text-xl">
							Every trade you make should benefit from innovation, speed and reliability. Universal
							Cryptosphere Trade delivers powerful platforms to put your strategies into action.
						</p>
						<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
					</div>
					<div className="lg:flex items-center gap-2">
						<Button btnText="Create Account" className="bg-green" />
					</div>
				</div>
				<div>
					<Image src={heroImg} alt="mobile" className=" mx-auto" />
				</div>
			</div>
		</section>
	);
}
