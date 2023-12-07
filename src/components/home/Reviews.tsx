import Image from "next/image";
import user from "public/images/user-profile.png";

export default function Reviews() {
	return (
		<div className="grid grid-cols-3 gap-8 max-w-desktop mx-auto py-16">
			<ReviewCard
				name="Roberto"
				review="Universal Cryptosphere Trade has had the best traders and accounts managers we have ever
				came across as trading veterans, this is the goto platform."
			/>
			<ReviewCard
				name="Tyler"
				review="I've always loved to invest but with a verified trading system. This platform gave me an opportunity to invest with less stress."
			/>
			<ReviewCard
				name="Martha"
				review="Universal Cryptosphere Trade has developed a personal plan for me that allows me to take much greater control of my financial affairs, and plan for the future"
			/>
		</div>
	);
}

interface ReviewCardProps {
	name: string;
	review: string;
}

const ReviewCard = ({ name, review }: ReviewCardProps) => {
	return (
		<div className="shadow-lg px-8 py-8 rounded-md">
			<p className="mb-8">{review}</p>
			<div className="flex justify-between items-center">
				<div>
					<span className="block font-bold text-lg">{name} ******</span>
					<span className="text-lightblue text-lg font-semibold">Investor</span>
					<div>
						<span className="text-lightblue text-xl">&#9733;</span>
						<span className="text-lightblue text-xl">&#9733;</span>
						<span className="text-lightblue text-xl">&#9733;</span>
						<span className="text-lightblue text-xl">&#9733;</span>
						<span className="text-lightblue text-xl">&#9733;</span>
					</div>
				</div>
				<div className="border-4 p-[3px] border-lightblue rounded-[100%]">
					<Image src={user} alt="user" height={65} width={65} />
				</div>
			</div>
		</div>
	);
};
