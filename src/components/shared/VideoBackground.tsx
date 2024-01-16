import { ReactNode } from "react";

export default function VideoBackground({ children }: { children: ReactNode }) {
	return (
		<div className="relative w-full h-full">
			<video
				autoPlay
				loop
				muted
				className="w-full h-full object-cover absolute top-0 xl:top-18 left-0 z-0"
			>
				<source src="./video/bg-video.mp4" type="video/mp4" />
			</video>
			<div className="z-10 relative">{children}</div>
		</div>
	);
}
