export interface Book {
	id: string;
	title: string;
	author: string;
	publisher: string;
	description?: string;
	image?: string;
	isFavorited: boolean;
	isWished: boolean;
}
