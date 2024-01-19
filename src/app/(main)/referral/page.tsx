import Button from "@/components/shared/Button";
import Image from "next/image";
import mobile from "public/images/trading-mobile.png";
import referral from "public/images/referral.webp";
import Link from "next/link";

export default function Referral() {
	return (
		<>
			<section className="bg-black bg-pattern min-h-[85svh] md:min-h-[50svh] xl:min-h-[85svh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
				<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
					<div className="mb-20 lg:mb-0">
						<div className="mb-10">
							<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">Referral Program</h1>
							<p className="text-lg mb-4 lg:xit'                                                                                                                                                                                                                       :text-xl">
								Partner with market leader and leading Forex broker, Universal Cryptosphere Trade.
							</p>
						</div>
						<div className="lg:flex items-center gap-2">
							<Link href="https://universalcryptospheredashboard.vercel.app/auth/signup">
								<Button btnText="Create Account" className="bg-green" />
							</Link>
						</div>
					</div>
					<div>
						<Image src={referral} alt="mobile" className="mx-auto h-auto" />
					</div>
				</div>
			</section>
			<section className="max-w-[1000px] mx-auto py-20 px-6 xl:px-0">
				<h2 className="font-bold text-2xl mb-3">Referral Partnerships</h2>
				<p>
					Professionalism, a respected brand and a proven track record are just some of the reasons
					why individuals and corporates choose GO Markets and become its Referral partners.
				</p>
				<br />
				<p>
					If you have a website, forum or a group of traders that you’d like to help get setup with
					GO Markets, you can sign up to our Referral Program after you read and accept to our
					Client Referral Guidelines and Client Referral Agreement.
				</p>
				<br />
				<p>
					When it comes to Referral Program, you want to be able to focus on new client’s traffic
					and not be concerned about existing clients. This is where our track record in MetaTrader
					and many years of servicing referral programs and Forex partnerships count.
				</p>
				<br />
				<p className="mb-3">When you join Universal Referral Program you access:</p>
				<ul className="list-disc px-10 mb-3">
					<li>Payment of Referrer remuneration;</li>
					<li>Flexible Referral program terms;</li>
					<li>Referral Program dashboard;</li>
					<li>Various marketing material including banners;</li>
					<li>Cookie tracking to ensure commissions get paid to you.</li>
				</ul>
				<p>
					Many Referrers get a regular income stream by referring a handful of clients a month to
					universal cryptosphere trade
				</p>
				<br />
				<p>Join Universal Cryptosphere Trade today, one of the the best Forex brokers.</p>
				<br />
				<div>
					<Link href="https://universalcryptospheredashboard.vercel.app/auth/signup">
						<Button btnText="Sign Up as a Referral Partner" className="bg-green text-white" />
					</Link>
				</div>
				<br />
				<div>
					<strong className="text-xl block">Compliance – Referral Program Guidelines</strong>
				</div>
				<br />
				<p>
					We have created some guidelines in a checklist form for you to assess your website/ social
					media site/blog against. This list has been created as a guide for you to understand our
					requirements.
				</p>
			</section>
		</>
	);
}
