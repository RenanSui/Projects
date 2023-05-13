'use client';
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const darkTheme =
	'dark:bg-[radial-gradient(circle,_hsla(197,_19%,_19%,_1)_0%,_hsla(195,_32%,_7%,_1)_100%)]';

export const lightTheme =
	'bg-[radial-gradient(circle,_hsla(0,_0%,_100%,_1)_0%,_hsla(0,_0%,_69%,_1)_100%)]';

export const useColorMode = () => {
	const [colorMode, setColorMode] = useLocalStorage('color-mode', 'light');

	useEffect(() => {
		const className = 'dark';
		const bodyClasses = window.document.body.classList;

		colorMode === 'dark'
			? bodyClasses.add(className)
			: bodyClasses.remove(className);
	}, [colorMode]);

	return [colorMode, setColorMode];
};
