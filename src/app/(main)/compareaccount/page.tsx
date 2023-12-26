import TradingOptions from "@/components/home/TradingOptions";
import Awards from "@/components/compareaccount/Awards";
import AccountOptions from "@/components/compareaccount/AccountOptions";
import TradingProcedures from "@/components/compareaccount/TradingProcedures";
import CompareacctHero from "@/components/compareaccount/CompareacctHero";

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
