import { v4 } from "uuid";
import { IGoogleBooksApi } from "../services/googleBooksApi";
import { Book } from "../types/Books";

export function transformIGoogleBooksApiToBook(book: IGoogleBooksApi): Book {
	const { volumeInfo } = book;
	const authors = volumeInfo?.authors || ["Sem autor"];

	return {
		id: v4(),
		title: volumeInfo?.title || "Sem título",
		author: authors[0],
		publisher: volumeInfo?.publisher || "Sem editora",
		description: volumeInfo?.description,
		image: volumeInfo?.imageLinks?.thumbnail,
		isFavorited: false,
		isWished: false,
	};
}
