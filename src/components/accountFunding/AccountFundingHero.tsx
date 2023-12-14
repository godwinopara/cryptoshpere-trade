import Button from "@/components/shared/Button";
import Image from "next/image";
import bitcoin from "public/images/bitcoin-logo.svg";

export default function AccountFundingHero() {
	return (
		<section className="bg-black text-white1 min-h-[50vh] flex items-center">
			<div className="max-w-desktop mx-auto flex items-center justify-between w-full">
				<div>
					<h1 className="text-5xl text-bold mb-8">Funding and Withdrawal</h1>
					<div className="flex gap-5">
						<Button btnText="Sign in" className="border" />
						<Button btnText="Create Account" className="bg-green" />
					</div>
				</div>
				<div className="flex justify-center">
					<Image
						src={bitcoin}
						alt="image of a phone with trading app"
						className="w-[90%] mr-auto"
					/>
				</div>
			</div>
		</section>
	);
}
