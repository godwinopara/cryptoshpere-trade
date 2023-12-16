import Button from "../shared/Button";
import Procedures from "../shared/Procedures";

export default function TradingProcedures() {
	return (
		<section className="bg-black pb-20 pt-32 text-white1 text-center">
			<h2 className="font-bold text-4xl mb-36">
				Start trading with <br />
				Universal Cryptosphere Trade
			</h2>
			<Procedures />
			<Button btnText="Open Account" className="border text-white text-xl" />
		</section>
	);
}
