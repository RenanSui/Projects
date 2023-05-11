'use client';
import { useEffect, useState } from 'react';

export const useLocalStorage = (key: string, initialValue: string) => {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			// Get from local storage by key
			const item = window.localStorage.getItem(key);

			// Parse stored json of ir none return initialValue
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	// useEffect to update local storage when the state changes
	useEffect(() => {
		try {
			// Allow value to be a function so we have same API as useState
			const valueToStore =
				typeof storedValue === 'function'
					? storedValue(storedValue)
					: storedValue;

			// Save state
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			// A more advanced implementation would handle the error case
			console.log(error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
};
