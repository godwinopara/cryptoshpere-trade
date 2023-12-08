import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
	return (
		<nav className="bg-darkBlue text-white py-5">
			<div className="flex justify-between items-center max-w-desktop mx-auto">
				<Link className="font-extrabold uppercase" href="/">
					Universal Cryptosphere Trade
				</Link>
				<ul className="flex items-center gap-5">
					<li className="relative account">
						<Link href="/account">Accounts</Link>
						<ul className="account__sub absolute left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<Link href="/compareaccount">Compare Our Account</Link>
							</li>
							<li>
								<Link href="/accountfunding">Account Funding / Withdrawal</Link>
							</li>
							<li>
								<Link href="/spread">Spreads</Link>
							</li>
							<li>
								<Link href="/referral">Referral Program</Link>
							</li>
							<li>
								<Link href="/affiliate">Affiliate</Link>
							</li>
						</ul>
					</li>
					<li className="relative about">
						<Link href="/about">About</Link>
						<ul className="about__sub absolute left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<a href="about-go-markets/index.html">About Us</a>
							</li>
							<li>
								<a href="chelseafc/index.html">Chelsea FC Partnership</a>
							</li>
							<li>
								<a href="chelseafc/index.html">Legal Documents</a>
							</li>
							<li>
								<a href="contact-us/index.html">Contact Us</a>
							</li>
						</ul>
					</li>
					<li className="relative trading">
						<Link href="/trading">Trading</Link>
						<ul className="absolute trading__sub  left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<Link href="/product">Product overview</Link>
							</li>
							<li>
								<Link href="/forex-cfd">Forex CFDs</Link>
							</li>
							<li>
								<Link href="/share-cfds-trading">Share CFDs</Link>
							</li>
							<li>
								<Link href="/index-trading-cfds">Index CFDs</Link>
							</li>
							<li>
								<Link href="/cfd-gold-silver">Metal CFDs</Link>
							</li>
							<li>
								<Link href="/commodity-cfd-trading">Commodity CFDs</Link>
							</li>
						</ul>
					</li>
					<li className="relative platform">
						<Link href="/platforms">Platforms</Link>
						<ul className="platform__sub absolute left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<a href="platforms/index.html">Platforms Overview</a>
							</li>
							<li>
								<a href="metatrader-4/index.html">MetaTrader 4</a>
							</li>
							<li>
								<a href="metatrader-5/index.html">MetaTrader 5</a>
							</li>
							<li>
								<a href="mobile-trading-platforms/index.html">Mobile trading platforms</a>
							</li>
							<li>
								<a href="https://app.lesslimittrade.com/">WebTrader</a>
							</li>
						</ul>
					</li>
					<li className="relative tools">
						<Link href="/tools">Tools</Link>
						<ul className="tools__sub absolute left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<a href="/autochartist">Autochartist</a>
							</li>
							<li>
								<a href="/mt4-genesis">Genesis</a>
							</li>
							<li>
								<a href="/vps">VPS</a>
							</li>
							<li>
								<a href="/go-trading-central">Trading Central</a>
							</li>
							<li>
								<a href="/a-quant-daily-strategies">a-Quant</a>
							</li>
							<li>
								<a href="/myfxbook">Myfxbook</a>
							</li>
						</ul>
					</li>
					<li className="relative news">
						<Link href="/news">News & Education</Link>
						<ul className="news__sub absolute left-0 top-5 py-4 px-5 flex flex-col gap-3 bg-darkBlue min-w-[300px]">
							<li>
								<a href="news-analysis/index.html">News &#038; Analysis</a>
							</li>
							<li>
								<a href="education-hub/index.html">Education Hub</a>
							</li>
							<li>
								<a href="economic-calendar/index.html">Economic Calendar</a>
							</li>
						</ul>
					</li>
				</ul>
				<div>
					<Link href="/login" className="inline-block font-bold mr-6 text-sm">
						Log in
					</Link>
					<Link href="/account" className="inline-block font-bold text-sm">
						Open CFD Account
					</Link>
				</div>
			</div>
		</nav>
	);
}
