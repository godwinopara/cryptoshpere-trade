"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import hamburger from "public/images/hamburger.svg";
import Image from "next/image";
import Button from "./Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function MobileNav() {
	return (
		<Navbar expand="md" className="bg-darkBlue">
			<Container>
				<Navbar.Brand href="#home" className="text-white fs-6 uppercase">
					Universal Cryptosphere Trade
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<Image
						src={hamburger}
						alt="hamburger icon"
						className="cursor-pointer"
						aria-controls="basic-navbar-nav"
					/>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home" className="text-white">
							Home
						</Nav.Link>
						<Nav.Link href="#link" className="text-white">
							Link
						</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		// <nav>
		// 	<div className="px-3 bg-darkBlue flex items-center justify-between py-6">
		// 		<Link className="no-underline text-white uppercase text-sm" href="/">
		// 			Universal Cryptosphere Trade
		// 		</Link>

		// 		<div>
		// 			<Image src={hamburger} alt="hamburger icon" className="cursor-pointer" />
		// 		</div>
		// 	</div>
		// 	<div>
		// 		<div className="px-3 py-10 bg-darkBlue">
		// 			<Button btnText="Log In" className="w-full border border-white text-white" />
		// 			<Button btnText="Open CFD Account" className="w-full text-white" />
		// 		</div>

		// 		<Accordion>
		// 			<Accordion.Item eventKey="0">
		// 				<Accordion.Header>Account</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/account" text="Compare Our Account" />
		// 						<NavLink href="/accountfunding" text="Account Funding / Withdrawal" />
		// 						<NavLink href="/spreads" text="Spreads" />
		// 						<NavLink href="/referral" text="Referral Program" />
		// 						<NavLink href="/affiliate" text="Affiliate" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="1">
		// 				<Accordion.Header>About</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/about" text="About Us" />
		// 						<NavLink href="/document" text="Chelsea FC Partnership" />
		// 						<NavLink href="/document" text="Legal Documents" />
		// 						<NavLink href="/contact" text="Contact Us" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="2">
		// 				<Accordion.Header>Trading</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/product" text="Product Overview" />
		// 						<NavLink href="/forex-cfds" text="Forex CFDs" />
		// 						<NavLink href="/share-cfds" text="Share CFDs" />
		// 						<NavLink href="/index-cfds" text="Index CFDs" />
		// 						<NavLink href="/metal-cfds" text="Metal CFDs" />
		// 						<NavLink href="/commodity-cfds" text="Commodity CFDs" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="3">
		// 				<Accordion.Header>Platforms</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/platforms" text="Platforms Overviews" />
		// 						<NavLink href="/metatrader-4" text="MetaTrader 4" />
		// 						<NavLink href="/metatrader-5" text="MetaTrader 5" />
		// 						<NavLink href="/mobile-trading" text="Mobile Trading Platforms" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="4">
		// 				<Accordion.Header>Tools</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/autochartist" text="Autochartist" />
		// 						<NavLink href="/mt4-genesis" text="Genesis" />
		// 						<NavLink href="/vps" text="VPS" />
		// 						<NavLink href="go-trading-central" text="Trading Central" />
		// 						<NavLink href="/a-quant-daily" text="a-Quant" />
		// 						<NavLink href="/myfxbook" text="MyFxbook" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 			<Accordion.Item eventKey="5">
		// 				<Accordion.Header>News & Education</Accordion.Header>
		// 				<Accordion.Body className="bg-darkBlue">
		// 					<ul>
		// 						<NavLink href="/new-analysis" text="News & Analysis" />
		// 						<NavLink href="/education" text="Education Hub" />
		// 						<NavLink href="/economic" text="Economic Calendar" />
		// 					</ul>
		// 				</Accordion.Body>
		// 			</Accordion.Item>
		// 		</Accordion>
		// 	</div>
		// </nav>
	);
}

interface NavLinkProps {
	href: string;
	text: string;
}

const NavLink = ({ href, text }: NavLinkProps) => {
	return (
		<li>
			<Link href={href} className="no-underline text-white mb-2 block">
				{text}
			</Link>
		</li>
	);
};
