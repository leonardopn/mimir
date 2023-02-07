import { useMemo } from "react";
import { useAppSelector } from "../useAppSelector";

export function useBooks() {
	const { data: books } = useAppSelector(state => state.books);

	const reverseBooks = useMemo(() => [...books].reverse(), [books]);

	const hasBooks = useMemo(() => books.length > 0, [books]);

	return { books, reverseBooks, hasBooks };
}
