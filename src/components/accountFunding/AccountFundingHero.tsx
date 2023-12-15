import Button from "@/components/shared/Button";
import Image from "next/image";
import bitcoin from "public/images/bitcoin-logo.svg";

export default function AccountFundingHero() {
	return (
		<section className="px-6 bg-black text-white1 min-h-[60vh] flex items-center xl:px-0">
			<div className="max-w-desktop mx-auto xl:flex items-center justify-between w-full">
				<div className="mb-10 xl:mb-0">
					<h1 className="text-4xl text-center xl:text-left xl:text-5xl text-bold mb-8">
						Funding and Withdrawal
					</h1>
					<div className="flex justify-center gap-5 mx:justify-between">
						<Button btnText="Sign in" className="border" />
						<Button btnText="Create Account" className="bg-green" />
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src={bitcoin}
						alt="image of a phone with trading app"
						className="w-1/2 mx-auto xl:w-[90%] xl:mr-auto"
					/>
				</div>
			</div>
		</section>
	);
}
