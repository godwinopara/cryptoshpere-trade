import Button from "@/components/shared/Button";
import Procedures from "@/components/shared/Procedures";
import CompareacctHero from "@/components/compareaccount/compareacctHero";
import TradingOptions from "@/components/home/TradingOptions";
import Awards from "@/components/compareaccount/Awards";
import AccountOptions from "@/components/compareaccount/AccountOptions";
import TradingProcedures from "@/components/compareaccount/TradingProcedures";

export default function CompareAccount() {
	return (
		<>
			<CompareacctHero />
			<TradingOptions />
			<Awards />
			<AccountOptions />
			<TradingProcedures />
		</>
	);
}
