import Image from "next/image";
import call from "public/images/call@2x.png";
import email from "public/images/email@2x.png";
import faq from "public/images/faq@2x.png";
import location from "public/images/location@2x.png";
import verified from "public/images/verified@2x.png";

export default function Contact() {
	return (
		<>
			<div className="max-w-desktop mx-auto py-20">
				<div className="mb-32">
					<h1 className="font-bold text-5xl mb-5 text-center">Contact Us</h1>
					<p className="text-lg xl:w-1/2 px-6 mx-auto text-center">
						The multilingual team at Universal Cryptosphere Trade are here to help 24 hours a day,
						Monday to Friday.
					</p>
				</div>
				{/* */}
				<div className="grid px-6 xl:grid-cols-2 gap-x-20 items-center xl:px-0">
					<div>
						<div className="grid md:grid-cols-2 gap-x-10">
							<div className="mb-5">
								<Image src={call} alt="phone logo" className="w-[15%] mb-4" />
								<h3 className="font-bold mb-3">Phone</h3>
								<p>International: [Premium Users]</p>
							</div>
							<div className="mb-5">
								<Image src={email} alt="email logo" className="w-[15%] mb-4" />
								<h3 className="font-bold  mb-3">Email</h3>
								<p>info@universalcryptospheretrade.com</p>
							</div>
							<div className="mb-5">
								<Image src={location} alt="location logo" className="w-[15%] mb-4" />
								<h3 className="font-bold mb-3">Head Office</h3>
								<p className="xl:w-full">6 Rue Cambacérès, 75008 Paris, France</p>
							</div>
							<div className="mb-5">
								<Image src={verified} alt="verified logo" className="w-[15%] mb-4" />
								<h3 className="font-bold mb-3">Company Registrations</h3>
								<p>Licence No.: GB 19024896</p>
								<p>Company No.: 170969</p>
							</div>
							<div className="mb-5">
								<Image src={faq} alt="faq logo" className="w-[15%] mb-4" />
								<h3 className="font-bold text-xl mb-3">FAQs</h3>
								<p className="xl:w-full">
									Whether you’re new to trading FX or you have several years of experience trading
									currencies, you will find a lot of useful information in our FAQs.
								</p>
							</div>
						</div>
					</div>
					<div>
						<form>
							<div className="mb-10 xl:mb-0 md:flex md:gap-x-10">
								<div className="mb-10">
									<label htmlFor="firstname" className="block mb-3 font-bold">
										First Name<span className="text-red-700">*</span>
									</label>
									<input
										type="text"
										name="firstname"
										className="border py-2 px-3 rounded-md  w-full"
									/>
								</div>
								<div className="">
									<label htmlFor="lastname" className="block mb-3 font-bold">
										Last Name<span className="text-red-700">*</span>
									</label>
									<input
										type="text"
										name="lastname"
										className="border py-2 px-3 rounded-md w-1/2"
									/>
								</div>
							</div>
							<div className="mb-10 xl:mb-0 md:flex md:gap-x-10">
								<div className="mb-10">
									<label htmlFor="email" className="block mb-3 font-bold">
										Email<span className="text-red-700">*</span>
									</label>
									<input type="text" name="email" className="border py-2 px-3 rounded-md w-full" />
								</div>
								<div>
									<label htmlFor="phone" className="block mb-3 font-bold">
										Phone Number<span className="text-red-700">*</span>
									</label>
									<input type="text" name="phone" className="border py-2 px-3 rounded-md w-full" />
								</div>
							</div>
							<div>
								<label htmlFor="message" className="block mb-3 font-bold">
									Message
								</label>
								<textarea name="message" className="border rounded-md h-32 w-full"></textarea>
							</div>
							<button className="bg-green mt-10 py-4 px-20 rounded-md text-white">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
			<div></div>
		</>
	);
}
