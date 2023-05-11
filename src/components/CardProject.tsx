import { FC } from 'react';

interface CardProjectProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	className?: string;
}

const CardProject: FC<CardProjectProps> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={`h-[400px] cursor-pointer overflow-hidden rounded-[48px] bg-zinc-800 shadow-2xl transition-[width] duration-200 ease-linear 
            ${className}
            `}
		></section>
	);
};

export default CardProject;
