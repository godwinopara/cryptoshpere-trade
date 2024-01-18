import Image from "next/image";
import Button from "../shared/Button";
import mobile from "public/images/trading-mobile.png";

export default function CompareacctHero() {
	return (
		<section className="bg-black bg-pattern min-h-[85vh] md:min-h-[50vh] xl:min-h-[100vh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
			<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
				<div className="mb-20 lg:mb-0">
					<div className="mb-10">
						<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">
							Compare Universal Trade accounts
						</h1>
						<p className="text-lg mb-4 lg:xit'                                                                                                                                                                                                                       :text-xl">
							Our accounts embrace leading technology, tools and order execution. With features and
							pricing structures to match different styles, they aim to enhance every trading
							experience..
						</p>
						<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
					</div>
					<div className="lg:flex items-center gap-2">
						<Button btnText="Create Account" className="bg-green" />
					</div>
				</div>
				<div>
					<Image src={mobile} alt="mobile" className="w-1/2 mx-auto" />
				</div>
			</div>
		</section>
	);
}
