import { IGoogleBooksApi } from "../services/googleBooksApi";
import { Book } from "../types/Books";
import { uuidv4 } from "./uuid";

export function transformIGoogleBooksApiToBook(book: IGoogleBooksApi): Book {
	const { volumeInfo } = book;

	const industryIdentifiers = volumeInfo.industryIdentifiers;
	const isbn10 =
		industryIdentifiers?.find(identifier => identifier.type === "ISBN_10")?.identifier || "";
	const isbn13 =
		industryIdentifiers?.find(identifier => identifier.type === "ISBN_13")?.identifier || "";
	const authors = volumeInfo?.authors || ["Sem autor"];

	return {
		id: uuidv4(),
		title: volumeInfo?.title || "Sem título",
		author: authors[0],
		publisher: volumeInfo?.publisher || "Sem editora",
		description: volumeInfo?.description,
		image: volumeInfo?.imageLinks?.thumbnail,
		isFavorited: false,
		isWished: false,
		isbn10,
		isbn13,
	};
}
