import Image from "next/image";
import feature from "public/images/features.png";
import m1 from "public/images/m1-mobile.png";
import m2 from "public/images/m2.png";
import m3 from "public/images/m3.png";

export default function Features() {
	return (
		<section className="py-20">
			<Image src={feature} alt="image of the available services" className="hidden lg:block" />

			<div className="lg:hidden">
				<Image src={m1} alt="image of the available services" />
				<Image src={m2} alt="image of the available services" />
				<Image src={m3} alt="image of the available services" />
			</div>
		</section>
	);
}
