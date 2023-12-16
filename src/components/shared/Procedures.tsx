import Image from "next/image";
import arrowUp from "public/images/arrow-down.svg";
import arrowDown from "public/images/arrow-up.svg";
import dollar from "public/images/dollar.svg";
import spark from "public/images/spark.svg";
import trading from "public/images/trading.svg";
import userProfile from "public/images/user-profile.svg";

export default function Procedures() {
	return (
		<div className="relative max-w-desktop mx-auto grid gap-y-20 mb-10 lg:gap-y-0 lg:grid-cols-3 lg:mb-32">
			<Image
				src={arrowUp}
				alt="arrow up"
				className="hidden lg:block absolute left-[23%] -top-[40%] xl:-top-[23%]"
			/>
			<div className="text-center">
				<div className="bg-[#ffd6e0] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
					<Image src={userProfile} alt="user image" />
				</div>
				<h3 className="text-2xl font-medium">Sign Up</h3>
				<p className="text-lg w-[70%] mx-auto text-center">
					Create an account and verify your identity
				</p>
			</div>
			<div className="text-center">
				<div className="bg-[#c4f5fc] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
					<Image src={dollar} alt="user image" />
				</div>
				<h3 className="text-2xl font-medium">Fund Your Account</h3>
				<p className="text-lg w-[70%] mx-auto text-center">
					Deposit funds into your account to begin trading
				</p>
			</div>
			<div className="text-center relative mt-14 lg:mt-0">
				<div className="relative bg-[#e8f369] mb-3 mx-auto h-[120px] w-[120px] flex items-center justify-center rounded-[100%]">
					<Image src={trading} alt="user image" />
					<Image src={spark} alt="spark image" className="absolute -right-[60%] -top-[60%]" />
				</div>
				<h3 className="text-2xl font-medium">Start Trading</h3>
				<p className="text-lg w-[70%] mx-auto text-center">
					Take a position in your choice of instrument
				</p>
				<Image
					src={arrowDown}
					alt="arrow up"
					className="hidden lg:block absolute -bottom-[40%] -left-[25%]"
				/>
			</div>
		</div>
	);
}
