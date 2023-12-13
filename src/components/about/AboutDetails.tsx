import Image from "next/image";
import ideaChart from "public/images/ideas-chart.png";

export default function AboutDetails() {
	return (
		<div className="py-20 bg-black text-white1 ">
			<div className="max-w-desktop mx-auto flex items-center gap-x-20">
				<div className="flex-1">
					<Image src={ideaChart} alt="forex chart" />
				</div>
				<div className="mb-20 flex-1">
					<h3 className="text-green text-xl mb-4 font-semibold">About Us</h3>
					<h2 className="text-5xl font-extrabold mb-5">
						Global markets, <br />
						in your hand
					</h2>
					<p className="max-w-[80%] text-lg">
						Formed in 2006, we’re a regulated, award-winning CFD provider here to take our client's
						experience further.
					</p>
					<br />
					<p>
						We give our client's trading journey highest priority, so we’re always evolving our
						technology, services and education. We’ve established ourselves as a leading, trusted,
						regulated broker offering the best possible experience.
					</p>
				</div>
			</div>
		</div>
	);
}
