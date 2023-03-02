import { useEffect, useState } from "react";

export default function useDebounceSearch(search, delay = 500) {
	const [debouncedSearch, setDebouncedSearch] = useState(search);

	useEffect(() => {
		const timeoutFunction = setTimeout(() => {
            setDebouncedSearch(search)
        }, delay);
        return () => {
            clearTimeout(timeoutFunction)
        }
	}, [search, delay]);

	return debouncedSearch;
}
