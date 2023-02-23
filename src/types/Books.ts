export interface Book {
	id: string;
	title: string;
	author: string;
	publisher: string;
	isFavorited: boolean;
	isWished: boolean;
	description?: string;
	isbn10?: string;
	isbn13?: string;
	image?: string;
}
