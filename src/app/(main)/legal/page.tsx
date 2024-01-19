import Button from "@/components/shared/Button";
import Image from "next/image";
import mobile from "public/images/trading-mobile.png";
import legal from "public/images/legal.jpg";
import Link from "next/link";

export default function Legal() {
	return (
		<>
			<section className="bg-black bg-pattern min-h-[85vh] md:min-h-[40vh] xl:min-h-[100vh] flex items-center  bg-right text-white1 pt-10 xl:pb-10">
				<div className="px-6 xl:px-0 grid text-center lg:text-left lg:grid-cols-2 lg:gap-20 items-center max-w-desktop mx-auto">
					<div className="mb-20 lg:mb-0">
						<div className="mb-10">
							<h1 className="text-4xl  lg:text-90 lg:leading-120  mb-5">Legal Documents</h1>
							<p className="text-lg mb-4 lg:xit'                                                                                                                                                                                                                       :text-xl">
								Universal Cryptosphere Trade provides legal documentation for clients to review
								before trading Forex, CFDs or any other financial product available.
							</p>
							<p className="text-md">*Investment Trends worldwide Leverage Trading Report 2022.</p>
						</div>
						<div className="lg:flex items-center gap-2">
							<Link href="https://universalcryptospheredashboard.vercel.app/auth/signup">
								<Button btnText="Create Account" className="bg-green" />
							</Link>
						</div>
					</div>
					<div>
						<Image src={legal} alt="mobile" className="rounded-md mx-auto" />
					</div>
				</div>
			</section>
			<section className="px-6 lg:max-w-[600px] xl:grid xl:grid-cols-3 xl:gap-x-32 xl:px-0 xl:max-w-desktop mx-auto py-20 text-lg">
				<div className="col-span-2 mb-20 xl:mb-0">
					<div className="mb-5">
						<h2 className="text-xl font-bold mb-8">
							Please ensure to read all legal documentation before opening a live trading account
							with Universal Cryptosphere Trade.
						</h2>
						<p>
							<Link href="#" className="underline text-blue-700">
								Disclosure Statement{"  "}
							</Link>
							– Our Disclosure Statement explains what you need to know about the products we can
							offer you.
						</p>
						<br />
						<p>
							<Link href="#" className="underline text-blue-700">
								Execution Policy{"  "}
							</Link>
							– This policy is to establish effective arrangements for the Company to obtain, the
							best possible result for its clients.
						</p>
						<br />
						<p>
							<Link href="#" className="underline text-blue-700">
								Privacy Policy {"  "}
							</Link>
							– Our Privacy Policy discloses how we collect, use, hold, disclose and disseminate
							your personal information.
						</p>
						<br />
						<p>
							<Link href="#" className="underline text-blue-700">
								Terms and Conditions{"  "}
							</Link>
							– The Terms & Conditions Terms & Conditions will govern all Financial Product
							transactions entered between us and you.
						</p>
					</div>

					<div>
						<h2 className="font-bold text-xl my-8">General Advice Warning</h2>
						<p>
							Trading derivatives and leveraged products carries a high level of risk, including the
							risk of losing substantially more than your initial investment. It is not suitable for
							everyone. Before you make any decision in relation to a financial product you should
							obtain and consider our Disclosure Statement (DS) available on our website and seek
							independent advice if necessary.
						</p>
						<br />
						<p>
							The information on this website is of a general nature only and does not consider your
							objectives, financial situation or needs. Every effort is made to provide information
							that is accurate. However, information is subject to change at any time without
							notice. We cannot guarantee, and assumes no legal liability or responsibility for, the
							relevance, accuracy, currency or completeness of the information.
						</p>
						<br />
						<p>
							Information on this site is not directed at residents in any country or jurisdiction
							where such distribution or use would be contrary to local law or regulation. Universal
							Cryptosphere Trade (MU) is a GBC, authorised and regulated by the Financial Services
							Commission (FSC) of Mauritius as an Investment Dealer (Full Service Dealer, excluding
							Underwriting).
						</p>
					</div>
				</div>
				<div className="grid-cols-1">
					<div className="text-lg bg-white shadow-md px-5 py-10 border-t-2 border-black">
						<h3 className="font-bold text-xl mb-3">We’re here to help</h3>
						<p>Call or email</p>
						<p>
							<strong>support@universalcryptosphere.com</strong> to talk about opening a trading
							account.
						</p>
						<br />
						<p>
							<strong>Contact us </strong>24 hours a day 5 days a week for all your trading needs
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
