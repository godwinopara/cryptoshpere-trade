import Image, { StaticImageData } from "next/image";
import Button from "../shared/Button";
import { FaCheck } from "react-icons/fa";

interface ProductCardProps {
	title: string;
	description: string;
	options: string[];
	img: StaticImageData | string;
}

export default function ProductCard({ title, description, options, img }: ProductCardProps) {
	return (
		<div className="py-8 mb-16 px-6 xl:px-0">
			<div className="lg:flex gap-x-10">
				<div className="mb-5 lg:mb-0 ">
					<Image src={img} alt="mt4 images" />
				</div>
				<div className="lg:w-[65%]">
					<h3 className="mb-3 font-bold text-2xl">{title}</h3>
					<p>{description}</p>
					<Button btnText="Learn More" className="bg-green text-white mt-5 px-8 mb-5 lg:mb-0" />
				</div>
				<div className="lg:w-[30%]">
					<div className="flex items-center gap-x-3 mb-2">
						<span>
							<FaCheck />
						</span>
						<p>Fast Execution</p>
					</div>

					{options.map((option, index) => {
						return (
							<div key={index} className="flex items-center gap-x-3 mb-2">
								<span>
									<FaCheck />
								</span>
								<p>{option}</p>
							</div>
						);
					})}

					<Button btnText="Open Account" className="bg-green text-white px-12 mt-8" />
				</div>
			</div>
		</div>
	);
}
