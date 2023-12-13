export default function Stats() {
	return (
		<section className="bg-black4 pb-20">
			<div className="max-w-desktop mx-auto grid grid-cols-3 items-center text-center text-white1">
				<div className="border-e-2 border-black1">
					<p className="text-green text-4xl mb-3">$10m</p>
					<p className="text-xl">Quarterly volume traded</p>
				</div>
				<div className="border-e-2 border-black1">
					<p className="text-green text-4xl mb-3">$15m</p>
					<p className="text-xl">Safeguarded Assets</p>
				</div>
				<div>
					<p className="text-green text-3xl mb-3">50+</p>
					<p className="text-xl">Countries</p>
				</div>
			</div>
		</section>
	);
}
