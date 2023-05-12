'use client';
import CardProject from '@/src/components/CardProject';
import { useColorMode } from '@/src/hooks/useColorMode';
import { useState } from 'react';
import { BsCardChecklist, BsFillMoonStarsFill } from 'react-icons/bs';
import { FaRegMoneyBillAlt, FaSun } from 'react-icons/fa';
import { MdCatchingPokemon } from 'react-icons/md';
import { TiWeatherStormy } from 'react-icons/ti';

const Projects = [
	{
		id: 0,
		name: 'Weather App',
		description:
			'Weather App with search option calling an external rest-API.',
		githubLink: 'https://github.com/RenanSui/weather-app',
		liveDemoLink: 'https://ren-weatherapp.vercel.app',
		imagePreview: 'url(/images/project_0.png)',
		icon: TiWeatherStormy,
	},
	{
		id: 1,
		name: 'Expense Tracker',
		description: 'Expense Tracker with CRUD-functionality.',
		githubLink: 'https://github.com/RenanSui/expense-tracker',
		liveDemoLink: 'https://renansui.github.io/expense-tracker/',
		imagePreview: 'url(/images/project_1.png)',
		icon: FaRegMoneyBillAlt,
	},
	{
		id: 2,
		name: 'Todo App',
		description: 'A Todolist app with basic CRUD-functionality.',
		githubLink: 'https://github.com/RenanSui/todoList',
		liveDemoLink: 'https://ren-todolist.vercel.app',
		imagePreview: 'url(/images/project_2.png)',
		icon: BsCardChecklist,
	},
	{
		id: 3,
		name: 'Pokédex',
		description:
			"Pokédex where users can infinite scroll down the page or search for a Pokémon name or it's number and access their information.",
		githubLink: 'https://github.com/RenanSui/pokedex',
		liveDemoLink: 'https://ren-pokedex.vercel.app',
		imagePreview: 'url(/images/project_3.png)',
		icon: MdCatchingPokemon,
	},
];

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
			className={`bg-lightGradient h-screen text-zinc-900 transition-all duration-500 dark:bg-[radial-gradient(circle,_hsla(197,_19%,_19%,_1)_0%,_hsla(195,_32%,_7%,_1)_100%)] dark:text-zinc-300`}
		>
			<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center transition-all duration-300">
				{Projects.map((project, index) => (
					<CardProject
						key={index}
						onClick={() => toggleAccordion(index)}
						className={`relative
						${accordion === index ? 'w-[580px]' : 'mx-2 w-12'}`}
					>
						<div
							className={`absolute z-10 rounded-full bg-[#0B525B] p-2 
							${
								accordion === index
									? 'bottom-6 left-8'
									: 'bottom-8 left-1/2 -translate-x-1/2'
							}`}
						>
							<project.icon
								className={` text-white 
								${accordion === index ? 'h-7 w-7' : 'h-4 w-4'}`}
							/>
						</div>
						<div
							className={`h-full w-full bg-center`}
							style={{
								backgroundImage: `${project.imagePreview}`,
							}}
						>
							<a
								href={`${project.liveDemoLink}`}
								target="_blank"
								className={`
								${accordion === index ? 'block h-full w-full' : ''}`}
								rel="noreferrer"
							/>
							<div
								className={`h-full w-full bg-[#1111114f] backdrop-blur-lg transition-all duration-300 
								${accordion === index ? 'opacity-0' : ''}`}
							/>
						</div>
					</CardProject>
				))}
			</div>

			{/* #0D1619 */}

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
