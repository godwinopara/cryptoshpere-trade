import Image, { StaticImageData } from "next/image";

interface CardProps {
	title: string;
	description: string;
	img?: string | StaticImageData;
	className?: string;
}

export default function Card({ title, description, img, className }: CardProps) {
	return (
		<div className="border border-white1 rounded-xl p-6">
			{img && (
				<div className="mb-8">
					<Image src={img} alt="rocket icon" />
				</div>
			)}

			<h4 className={`text-3xl font-bold mb-5  ${className}`}>{title}</h4>
			<p>{description}</p>
		</div>
	);
}
