import Link from "next/link";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
	const loggedIn = false;

	return (
		<footer className="bg-darkBlue text-white py-20">
			<div className="max-w-desktop mx-auto">
				<Link href="/" className="uppercase text-2xl pb-10 block font-bold">
					Universal Cryptosphere Trade
				</Link>
				<hr />

				<div className="grid grid-cols-4 py-10 text-sm">
					<div>
						<h3 className="font-bold mb-2">CALL US</h3>
						<h4 className="font-semibold mb-1">International</h4>
						<p>{loggedIn ? "+1 658-689-5678" : "[Premium Users]"}</p>
					</div>
					<div>
						<div>
							<h3 className="font-bold mb-2">CONTACT US</h3>
							<div className="mb-4">
								<h4 className="font-semibold mb-1">Customer Support</h4>
								<p>info@lesslimittrade.com</p>
							</div>
						</div>
						<div className="mb-4">
							<h3 className="font-semibold mb-1">New Accounts</h3>
							<p>account@lesslimittrade.com</p>
						</div>
					</div>
					<div>
						<h3 className="font-bold mb-3">LEGAL DOCUMENTS</h3>
						<ul>
							<li className="mb-1">
								<Link href="privacy">Privacy Policy</Link>
							</li>
							<li className="mb-1">
								<Link href="privacy">Terms and Conditions</Link>
							</li>
							<li>
								<Link href="privacy">Disclosure Statement</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="font-bold mb-3">CLIENTS</h3>
						<ul>
							<li className="mb-1">
								<Link href="privacy">Quick Support </Link>
							</li>
							<li>
								<Link href="privacy"></Link>Holiday Trading Hours
							</li>
						</ul>
					</div>
				</div>
				<hr />

				<div className="text-xs pt-10 pb-10">
					<div className="flex justify-end gap-2 pb-10">
						<Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
							<FaFacebook />
						</Link>
						<Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
							<FaTwitter />
						</Link>
						<Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
							<FaLinkedin />
						</Link>
						<Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
							<FaYoutube />
						</Link>
						<Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
							<FaInstagram />
						</Link>
					</div>
					<p>
						Trading derivatives and leveraged products carries a high level of risk, including the
						risk of losing substantially more than your initial investment. It is not suitable for
						everyone. Before making any decisions in relation to a financial product, you should
						obtain and consider our Disclosure Statement (DS) available on our website and seek
						independent advice if necessary.
					</p>
					<br />
					<p>
						The information on this website is of a general nature only and does not consider your
						goals, financial situation or needs. Every effort is made to provide accurate
						information. However, the information is subject to change at any time without notice.
						GO cannot guarantee and assume no legal responsibility for the relevance, accuracy,
						topicality or completeness of the information.
					</p>
					<br />
					<p>
						We use a number of cookies on this website for functional, analytical and marketing
						purposes. By continuing to use this website, you agree to our use of cookies. You can
						view our cookie policy here from the Privacy Policy or by following the link at the
						bottom of any page of our website.
					</p>
					<br />
					<p>
						This website is owned and operated by Limitless Trade Ltd. All contents © 2021 Limitless
						Trade Ltd Pty Ltd (MU). All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
