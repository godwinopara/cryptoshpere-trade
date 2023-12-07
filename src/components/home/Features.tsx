import Image from "next/image";
import feature from "public/images/features.png";

export default function Features() {
	return (
		<section className="py-20">
			<Image src={feature} alt="image of the available services" />
		</section>
	);
}
