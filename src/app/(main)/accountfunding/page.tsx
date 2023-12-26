import AccountFundingDetails from "@/components/accountFunding/AccountFundingDetails";
import AccountFundingHero from "@/components/accountFunding/AccountFundingHero";
import FundingOptions from "@/components/accountFunding/FundingOptions";

export default function AccountFunding() {
	return (
		<>
			<AccountFundingHero />
			<FundingOptions />
			<AccountFundingDetails />
		</>
	);
}
