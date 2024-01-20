export default function ShareHero() {
	return (
		<section className="px-6 min-h-[50vh] bg-black4 flex items-center justify-center xl:min-h-[70vh] bg-sharebg bg-cover bg-no-repeat bg-right relative lg:px-0">
			<div className="bg-black absolute top-0 left w-full h-full opacity-60"></div>
			<div className="text-center text-white1 z-20 relative">
				<h1 className="text-4xl md:text-6xl font-extrabold mb-3">Share CFDs Trading</h1>
				<p className="max-w-4xl md:text-xl">
					Engage in Share CFD trading across AU, US, and HK markets, unlocking leverage of up to
					5:1. Seize control of positions with a minimum investment of $200, enabling you to
					navigate the dynamic world of stocks, including renowned companies like Apple, Google,
					Facebook, and others.
				</p>
			</div>
		</section>
	);
}
