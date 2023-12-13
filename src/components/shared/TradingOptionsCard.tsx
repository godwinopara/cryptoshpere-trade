import Image, { StaticImageData } from "next/image";

interface TradingOptionsCardProps {
	img: string | StaticImageData;
	alt: string;
	title: string;
	description: string;
}

export default function TradingOptionsCard({
	img,
	alt,
	title,
	description,
}: TradingOptionsCardProps) {
	return (
		<div className="">
			<Image src={img} alt={alt} className="h-16 w-16" />
			<h3 className="py-4 font-extrabold text-xl leading-7">{title}</h3>
			<p className="text-xl w-[95%]">{description}</p>
		</div>
	);
}
