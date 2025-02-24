import Image from "next/image";

import cooper from "../../assets/medal_cooper.svg";
import gold from "../../assets/medal_gold.svg";
import silver from "../../assets/medal_silver.svg";

export function Ranking() {
	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">1º</span> | Jhon Armless
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						1030
					</span>

					<Image src={gold} alt="gold" className="absolute top-0 right-8" />
				</div>

				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">2º</span> | Jhon Doe
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						756
					</span>

					<Image src={silver} alt="gold" className="absolute top-0 right-8" />
				</div>

				<div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
					<span className="text-sm text-gray-300 leading-none">
						<span className="font-semibold">3º</span> | Jane Doe
					</span>
					<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
						532
					</span>

					<Image src={cooper} alt="gold" className="absolute top-0 right-8" />
				</div>
			</div>
		</div>
	);
}
