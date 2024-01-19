import Link from "next/link";
import Button from "../shared/Button";
import Procedures from "../shared/Procedures";

export default function TradingProcedures() {
	return (
		<section className="bg-black pb-20 pt-32 text-white1 text-center">
			<h2 className="font-bold text-4xl mb-36">
				Start Earning with <br />
				Universal Cryptosphere Trade
			</h2>
			<Procedures />
			<Link href="https://universalcryptospheredashboard.vercel.app/auth/login">
				<Button btnText="Create Account" className="border text-white text-xl" />
			</Link>
		</section>
	);
}
