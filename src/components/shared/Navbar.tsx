import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
	return (
		<nav className="bg-darkBlue text-white py-5">
			<div className="flex justify-between items-center max-w-desktop mx-auto">
				<Link className="font-bold text-lg " href="/">
					Universal Cryptosphere Trade
				</Link>
				<ul className="flex items-center gap-3">
					<li>
						<Link href="/account">Accounts</Link>
					</li>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/trading">Trading</Link>
					</li>
					<li>
						<Link href="/platforms">Platforms</Link>
					</li>
					<li>
						<Link href="/tools">Tools</Link>
					</li>
					<li>
						<Link href="/news">News & Education</Link>
					</li>
				</ul>
				<div>
					<Link href="/login" className="inline-block font-bold mr-6">
						Log in
					</Link>
					<Link href="/account" className="inline-block font-bold">
						Open CFD Account
					</Link>
				</div>
			</div>
		</nav>
	);
}
