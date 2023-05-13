'use client';
import { CardProject } from '@/src/components/CardProject';
import { darkTheme, lightTheme, useColorMode } from '@/src/hooks/useColorMode';
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
			'Enable users to get instant alerts regarding weather conditions;',
		githubLink: 'https://github.com/RenanSui/weather-app',
		liveDemoLink: 'https://ren-weatherapp.vercel.app',
		imagePreview: 'url(/images/project_0.png)',
		icon: TiWeatherStormy,
	},
	{
		id: 1,
		name: 'Expense Tracker',
		description:
			'Recording all your expenditures so you have a clear and detailed understanding of your budget.',
		githubLink: 'https://github.com/RenanSui/expense-tracker',
		liveDemoLink: 'https://renansui.github.io/expense-tracker/',
		imagePreview: 'url(/images/project_1.png)',
		icon: FaRegMoneyBillAlt,
	},
	{
		id: 2,
		name: 'Todo App',
		description:
			'Offer a way to increase productivity, stopping you from forgetting things, helps prioritise tasks, manage tasks effectively, etc.',
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
			className={`h-screen text-zinc-900 transition-all duration-500 dark:text-zinc-300 
			${lightTheme} ${darkTheme}`}
		>
			<div className="absolute left-1/2 top-1/2 flex w-[calc(100%_-_4px)] -translate-x-1/2 -translate-y-1/2 justify-center transition-all duration-300 ">
				{Projects.map((project, index) => (
					<CardProject
						key={index}
						onClick={() => toggleAccordion(index)}
						className={`${
							accordion === index
								? 'mx-0 w-full max-w-[580px] sm:w-[580px]'
								: 'mx-1 w-12 sm:flex-shrink-0'
						} 
                    ${
						accordion < index - 1 || accordion > index + 1
							? 'hidden md:block'
							: ''
					}`}
					>
						<div
							className={`relative flex h-full w-full items-end justify-end bg-cover bg-center`}
							style={{
								backgroundImage: `${project.imagePreview}`,
							}}
						>
							<div
								className={`absolute flex flex-col items-center gap-4 rounded-2xl bg-[#ffffffbd] p-4 transition-all duration-300 md:flex-row ${
									accordion === index
										? 'bottom-2 left-2 right-2'
										: '-left-96 -right-96 bottom-2 opacity-0'
								}`}
							>
								<div
									className={`relative z-50 h-11 w-11 rounded-full bg-[#0B525B] p-2`}
								>
									<project.icon
										className={`h-7 w-7 text-white`}
									/>
								</div>
								<div className="flex flex-col text-black">
									<h1 className="font-medium">
										{project.name}
									</h1>
									<p className="">{project.description}</p>
								</div>
							</div>
							<div
								className={`absolute z-50 h-11 w-11 rounded-full bg-[#0B525B] p-2 ${
									accordion === index
										? 'opacity-0'
										: 'bottom-9 left-1/2 h-8 w-8 -translate-x-1/2 opacity-100'
								}`}
							>
								<project.icon
									className={`text-white ${
										accordion === index
											? 'h-7 w-7'
											: 'h-4 w-4'
									}`}
								/>
							</div>
							<a
								href={`${project.liveDemoLink}`}
								target="_blank"
								className={` transition-all duration-300
								${accordion === index ? 'absolute bottom-0 left-0 right-0 top-0' : ''}`}
								rel="noreferrer"
							/>
							<div
								className={`bg-[#1111114f] backdrop-blur-lg transition-all duration-300 
                        ${
							accordion === index
								? 'opacity-0'
								: 'absolute bottom-0 left-0 right-0 top-0'
						}`}
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
