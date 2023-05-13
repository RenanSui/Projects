import { FC } from 'react';

interface CardProjectProps extends React.HTMLAttributes<HTMLDivElement> {
	children?: string | JSX.Element | JSX.Element[] | (string | JSX.Element)[];
	className?: string;
}

const CardProject: FC<CardProjectProps> = ({ className, ...props }) => {
	return (
		<section
			{...props}
			className={`relative h-[500px] w-12 cursor-pointer overflow-hidden rounded-[24px] bg-transparent shadow-2xl transition-[width]  duration-200 ease-linear md:h-[400px]
            ${className}
            `}
		></section>
	);
};

export { CardProject };
