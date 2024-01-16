"use client";
// import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import hamburger from "public/images/hamburger.svg";
import Image from "next/image";
import Button from "./Button";
import { useEffect } from "react";
import logo from "public/images/logo.svg";

export default function MobileNav() {
	useEffect(() => {
		const init = async () => {
			const { Collapse, Dropdown, Ripple, initTE } = await import("tw-elements");
			initTE({ Collapse, Dropdown, Ripple });
		};
		init();
	}, []);

	return (
		// <!-- Main navigation container -->
		<nav
			className="relative flex w-full flex-nowrap items-center justify-between bg-black3 py-2 text-white shadow-lg hover:text-neutral-700 focus:text-neutral-700 xl:hidden"
			data-te-navbar-ref
		>
			<div className="flex w-full flex-wrap items-center justify-between px-3">
				<div className="flex w-full justify-between items-center py-3 ">
					<div className="ml-2">
						<Link className="text-sm text-white md:text-xl" href="#">
							<Image src={logo} alt="logo" />
						</Link>
					</div>
					{/* <!-- Hamburger button for mobile view --> */}
					<button
						className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 xl:hidden"
						type="button"
						data-te-collapse-init
						data-te-target="#navbarSupportedContent2"
						aria-controls="navbarSupportedContent2"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						{/* <!-- Hamburger icon --> */}
						<span className="[&>svg]:w-7">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-7 w-7"
							>
								<path
									fillRule="evenodd"
									d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
									clipRule="evenodd"
								/>
							</svg>
						</span>
					</button>
				</div>

				{/* <!-- Collapsible navbar container --> */}
				<div
					className="!visible pb-10 mt-5 hidden flex-grow basis-[100%] items-center"
					id="navbarSupportedContent2"
					data-te-collapse-item
				>
					{/* Auth btn */}
					<div className="mb-5">
						<Link
							href="https://universalcryptospheredashboard.vercel.app/auth/login"
							className="rounded-[100px] py-3 px-5 border border-black2 bg-black1 font-bold mb-5 w-[70%] lg:w-[40%] block mx-auto text-center"
						>
							Sign In
						</Link>
						<Link
							href="https://universalcryptospheredashboard.vercel.app/auth/signup"
							className="rounded-[100px] py-3 px-5 bg-green font-bold mb-5 w-[70%] lg:w-[40%] block mx-auto text-center"
						>
							Create Account
						</Link>
					</div>
					{/* <!-- Left links --> */}
					<ul className="list-style-none mr-auto flex flex-col pl-0" data-te-navbar-nav-ref>
						{/* <!-- Home link --> */}
						<Link
							className="inline-block px-2  pb-2 pt-2.5  font-medium  text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5"
							data-te-collapse-init
							data-te-ripple-init
							data-te-ripple-color="light"
							href="#collapseExample"
							role="button"
							aria-expanded="false"
							aria-controls="collapseExample"
						>
							Account
						</Link>

						<ul
							className="!visible hidden px-8 py-4 bg-midblue"
							id="collapseExample"
							data-te-collapse-item
						>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/compareaccount">Compare Our Account</Link>
							</li>
							<li className="block rounded-lg p-2">
								<Link href="/accountfunding">Account Funding / Withdrawal</Link>
							</li>
							<li className="block rounded-lg p-2">
								<Link href="/spread">Spreads</Link>
							</li>
							<li className="block rounded-lg p-2">
								<Link href="/referral">Referral Program</Link>
							</li>
							<li className="block rounded-lg p-2">
								<Link href="/affiliate">Affiliate</Link>
							</li>
						</ul>

						{/* ============== About =============== */}
						<Link
							className="inline-block px-2  pb-2 pt-2.5 font-medium  text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5"
							data-te-collapse-init
							data-te-ripple-init
							href="#abt"
							role="button"
							aria-expanded="false"
							aria-controls="abt"
						>
							About
						</Link>

						<ul className="!visible hidden px-8 py-4 bg-midblue" id="abt" data-te-collapse-item>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/about">About Us</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/legal">Legal Documents</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/contact">Contact Us</Link>
							</li>
						</ul>
						{/* ============== Trading =============== */}
						<Link
							className="inline-block px-2  pb-2 pt-2.5 font-medium  text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5"
							data-te-collapse-init
							data-te-ripple-init
							href="#trading"
							role="button"
							aria-expanded="false"
							aria-controls="trading"
						>
							Trading
						</Link>

						<ul className="!visible hidden px-8 py-4 bg-midblue" id="trading" data-te-collapse-item>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/product">Product overview</Link>
							</li>
							{/* <li className="block rounded-lg p-2 text-sm">
								<Link href="/forex-cfd">Forex CFDs</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/share-cfds-trading">Share CFDs</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/index-trading-cfds">Index CFDs</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/cfd-gold-silver">Metal CFDs</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/commodity-cfd-trading">Commodity CFDs</Link>
							</li> */}
						</ul>
						{/* ============== Platform =============== */}
						<Link
							className="inline-block px-2  pb-2 pt-2.5 font-medium  text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5"
							data-te-collapse-init
							data-te-ripple-init
							href="#platform"
							role="button"
							aria-expanded="false"
							aria-controls="platform"
						>
							Platform
						</Link>

						<ul
							className="!visible hidden px-8 py-4 bg-midblue"
							id="platform"
							data-te-collapse-item
						>
							<li className="block rounded-lg p-2 text-sm">
								<a href="/platforms">Platforms Overview</a>
							</li>
							{/* <li className="block rounded-lg p-2 text-sm">
								<a href="/metatrader-4">MetaTrader 4</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="metatrader-5/index.html">MetaTrader 5</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="mobile-trading-platforms/index.html">Mobile trading platforms</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="https://app.lesslimittrade.com/">WebTrader</a>
							</li> */}
						</ul>
						{/* ============== Tools =============== */}
						{/* <Link
							className="inline-block px-2  pb-2 pt-2.5 font-medium  text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5 "
							data-te-collapse-init
							data-te-ripple-init
							href="#tools"
							role="button"
							aria-expanded="false"
							aria-controls="tools"
						>
							Tools
						</Link>

						<ul className="!visible hidden px-8 py-4 bg-midblue" id="tools" data-te-collapse-item>
							<li className="block rounded-lg p-2 text-sm">
								<Link href="/product">Product overview</Link>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="platforms/index.html">Platforms Overview</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="metatrader-4/index.html">MetaTrader 4</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="metatrader-5/index.html">MetaTrader 5</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="mobile-trading-platforms/index.html">Mobile trading platforms</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="https://app.lesslimittrade.com/">WebTrader</a>
							</li>
						</ul> */}
						{/* ============== News and Education =============== */}
						{/* <Link
							className="inline-block px-2  pb-2 pt-2.5 font-medium text-white transition duration-150 ease-in-out lg:text-xl lg:pl-5"
							data-te-collapse-init
							data-te-ripple-init
							href="#news"
							role="button"
							aria-expanded="false"
							aria-controls="news"
						>
							News & Education
						</Link>

						<ul className="!visible hidden px-8 py-4 bg-midblue" id="news" data-te-collapse-item>
							<li className="block rounded-lg p-2 text-sm">
								<a href="news-analysis/index.html">News & Analysis</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="education-hub/index.html">Education Hub</a>
							</li>
							<li className="block rounded-lg p-2 text-sm">
								<a href="economic-calendar/index.html">Economic Calendar</a>
							</li>
						</ul> */}
					</ul>
				</div>
			</div>
		</nav>
	);
}
