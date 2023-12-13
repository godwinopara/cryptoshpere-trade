import Card from "./Card";
import rocket from "public/images/rocket.svg";
import astronut from "public/images/astronut.svg";
import infinity from "public/images/infinity.svg";

export default function CoreValues() {
	return (
		<div className="bg-black text-white1 py-20">
			<div className="max-w-desktop mx-auto ">
				<div className="mb-20">
					<h3 className="text-green text-xl mb-4 font-semibold">Core Values</h3>
					<h2 className="text-5xl font-extrabold mb-5">
						Embracing Values, <br />
						Delivering Results
					</h2>
					<p className="max-w-[50%] text-lg">
						Everything we do at Universal Cryptosphere Trade is guided by our five core values: Do
						the right thing, put clients first, lead with exceptional ideas, commit to diversity and
						inclusion, and give back.
					</p>
				</div>

				<div className="grid grid-cols-3 gap-x-20">
					<Card
						img={astronut}
						title="Integrity and Compliance"
						description="We endeavour to provide clients with transparent, secure and reliable services.
								Universal Cryptosphere Trade is licensed by the Financial Services Commission (FSC)
								of Mauritius as an Investment Dealer (Full Service Dealer, excluding Underwriting)."
						className="w-[60%]"
					/>
					<Card
						img={infinity}
						title="Diversity and Freedom"
						description="Universal Cryptosphere Trade is differentiated by the caliber of our diverse team.
								Our culture of access and inclusion has built our legacy and shapes our future,
								helping to strengthen our business and bring value to clients."
						className="w-[60%]"
					/>
					<Card
						img={rocket}
						title="Inovation in all areas"
						description="Universal Cryptosphere Tradeis dedicated to ensuring fast execution speed, quality
								trading platforms and secure transactions to bring clients the most enjoyable
								trading experience."
						className="w-[60%]"
					/>
				</div>
			</div>
		</div>
	);
}
