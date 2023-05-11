'use client';
import CardProject from '@/src/components/CardProject';
import { useColorMode } from '@/src/hooks/useColorMode';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

export default function Home() {
	const [colorMode, setColorMode] = useColorMode();
	const [accordion, setActiveAccordion] = useState(0);

	const toggleAccordion = (index: number) => {
		if (index === accordion) setActiveAccordion(-1);
		setActiveAccordion(index);
		console.log('clicou');
	};

	return (
		<main
			className={`h-screen bg-zinc-300 text-zinc-900 transition-all duration-500 dark:bg-zinc-900 dark:text-zinc-300`}
		>
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center transition-all duration-300">
				{[0, 1, 2, 3].map((item, index) => (
					<CardProject
						key={index}
						onClick={() => toggleAccordion(index)}
						className={`
						${accordion === index ? 'w-[580px]' : 'mx-2 w-12'}`}
					>
						<div
							className={`h-full w-full bg-center`}
							style={{
								backgroundImage: `url(/images/project_${index}.png)`,
							}}
						>
							<a
								href="https://www.youtube.com.br"
								target="_blank"
								className={`
								${accordion === index ? 'block h-full w-full' : ''}`}
								rel="noreferrer"
							/>
							<div
								className={`h-full w-full bg-[#1111114f] shadow-inner backdrop-blur-lg transition-all duration-300 
								${accordion === index ? 'opacity-0' : ''}`}
							/>
						</div>
					</CardProject>
				))}
			</div>

			<button
				onClick={() =>
					setColorMode(colorMode === 'light' ? 'dark' : 'light')
				}
				className={`group absolute bottom-4 left-4 rounded-full bg-zinc-900 px-4 py-4 text-zinc-300 transition-all duration-300 hover:bg-zinc-600 dark:bg-zinc-300 dark:text-zinc-900 dark:hover:bg-zinc-600`}
			>
				{colorMode === 'light' ? (
					<BsFillMoonStarsFill className="h-6 w-6 transition-all duration-300 group-hover:rotate-[35deg]" />
				) : (
					<FaSun className="h-6 w-6 transition-all duration-300 group-hover:rotate-90" />
				)}
			</button>
		</main>
	);
}
