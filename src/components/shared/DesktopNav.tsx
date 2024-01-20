import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.svg";

export default function DesktopNav() {
	const homeSubLinks = [
		{ link: "/compareaccount", text: "Compare Our Account" },
		{ link: "/accountfunding", text: "Account Funding / Withdrawal" },
		{ link: "/spread", text: "Spreads" },
		{ link: "/referral", text: "Referral Program" },
		// { link: "/affiliate", text: "Affiliate" },
	];

	const aboutSubLinks = [
		{ link: "/about", text: "About Us" },
		{ link: "/legal", text: "Legal Documents" },
		{ link: "/contact", text: "Contact Us" },
	];

	const tradingSubLinks = [
		{ link: "/product", text: "Product Overview" },
		{ link: "/forex", text: "Forex CFDs" },
		{ link: "/share", text: "Share CFDs" },
		// { link: "/index", text: "Index CFDs" },
		// { link: "/metal", text: "Metal CFDs" },
		// { link: "/commodity", text: "Commodity CFDs" },
	];
	const platformSubLinks = [
		{ link: "/platforms", text: "Platforms Overview" },
		// { link: "/metatrader4", text: "MetaTrader 4" },
		// { link: "/metatrader5", text: "MetaTrader 5" },
		// { link: "/mobile-trading", text: "Mobile trading platforms" },
		// { link: "/webtrader", text: "Web Trader" },
	];
	// const toolsSubLinks = [
	// 	{ link: "/autochartist", text: "Autochartist" },
	// 	{ link: "genesis", text: "Genesis" },
	// 	{ link: "/vps", text: "VPS" },
	// 	{ link: "/trading-central", text: "Trading Central" },
	// 	{ link: "/a-quant", text: "A-Quant" },
	// 	{ link: "/fxbook", text: "MyFxBook" },
	// ];
	// const newsSubLinks = [
	// 	{ link: "/news-analysis", text: "News & Analysis" },
	// 	{ link: "/education-hub", text: "Education Hub" },
	// 	{ link: "/economic-calendar", text: "Economic Calendar" },
	// ];

	return (
		<>
			<nav className="hidden xl:block bg-black3 relative text-white px-4 py-2 xl:px-0 z-[100]">
				<div className="flex justify-between items-center max-w-desktop mx-auto">
					<Link className="font-extrabold uppercase" href="/">
						<Image src={logo} alt="logo" />
					</Link>
					<ul className="flex items-center">
						<li className="account relative">
							<button className="py-5">
								<li className="px-4 hover:bg-black">Accounts</li>
							</button>
							<ul className="account__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
								{homeSubLinks.map((subLink, id) => {
									return (
										<li key={id} className="hover:bg-black inline-block py-3 px-4">
											<Link href={subLink.link} className=" block">
												{subLink.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						<li className="about relative">
							<button className="py-5">
								<li className="px-4 hover:bg-black">About</li>
							</button>
							<ul className="about__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
								{aboutSubLinks.map((subLink, id) => {
									return (
										<li key={id} className="hover:bg-black inline-block ">
											<Link href={subLink.link} className="py-3 px-4 block">
												{subLink.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						<li className="relative trading">
							<button className="py-5">
								<li className="px-4 hover:bg-black">Trading</li>
							</button>
							<ul className="trading__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
								{tradingSubLinks.map((subLink, id) => {
									return (
										<li key={id} className="hover:bg-black inline-block ">
											<Link href={subLink.link} className="py-3 px-4 block">
												{subLink.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						<li className="relative platform">
							<button className="py-5">
								<li className="px-4 hover:bg-black">Platforms</li>
							</button>
							<ul className="platform__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
								{platformSubLinks.map((subLink, id) => {
									return (
										<li key={id} className="hover:bg-black inline-block ">
											<Link href={subLink.link} className="py-3 px-4 block">
												{subLink.text}
											</Link>
										</li>
									);
								})}
							</ul>
						</li>
						{/* <li className="relative tools">
						<button className="py-5">
							<li className="px-4 hover:bg-black">Tools</li>
						</button>
						<ul className="tools__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
							{toolsSubLinks.map((subLink, id) => {
								return (
									<li key={id} className="hover:bg-black inline-block ">
										<Link href={subLink.link} className="py-3 px-4 block">
											{subLink.text}
										</Link>
									</li>
								);
							})}
						</ul>
					</li> */}
						{/* <li className="relative news">
						<button className="py-5">
							<li className="px-4 hover:bg-black">News & Education</li>
						</button>
						<ul className="news__sub absolute w-[300px] left-0 top-[65px] py-4 px-5 flex flex-col gap-3 bg-black3 min-w-screen transition">
							{newsSubLinks.map((subLink, id) => {
								return (
									<li key={id} className="hover:bg-black inline-block ">
										<Link href={subLink.link} className="py-3 px-4 block">
											{subLink.text}
										</Link>
									</li>
								);
							})}
						</ul>
					</li> */}
					</ul>
					<div className="flex items-center gap-x-4">
						<Link
							href="https://universalcryptospheredashboard.vercel.app/auth/login"
							className="rounded-[100px] py-2 px-5 border border-black2 bg-black1"
						>
							Sign In
						</Link>
						<Link
							href="https://universalcryptospheredashboard.vercel.app/auth/signup"
							className="rounded-[100px] py-2 px-5 bg-green"
						>
							Create Account
						</Link>
					</div>
				</div>
			</nav>
		</>
	);
}
