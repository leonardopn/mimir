import axios from "axios";

export interface IGoogleBooksApi {
	kind: "books#volume";
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: {
		title: string;
		subtitle: string;
		authors?: string[];
		publisher: string;
		publishedDate: string;
		description: string;
		industryIdentifiers?: [
			{
				type: string;
				identifier: string;
			}
		];
		pageCount: number;
		dimensions: {
			height: string;
			width: string;
			thickness: string;
		};
		printType: string;
		mainCategory: string;
		categories: [string];
		averageRating: number;
		ratingsCount: number;
		contentVersion: string;
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
			small: string;
			medium: string;
			large: string;
			extraLarge: string;
		};
		language: string;
		previewLink: string;
		infoLink: string;
		canonicalVolumeLink: string;
	};
	userInfo: {
		isPurchased: boolean;
		isPreordered: boolean;
		updated: Date;
	};
	saleInfo: {
		country: string;
		saleability: string;
		onSaleDate: Date;
		isEbook: boolean;
		listPrice: {
			amount: number;
			currencyCode: string;
		};
		retailPrice: {
			amount: number;
			currencyCode: string;
		};
		buyLink: string;
	};
	accessInfo: {
		country: string;
		viewability: string;
		embeddable: boolean;
		publicDomain: boolean;
		textToSpeechPermission: string;
		epub: {
			isAvailable: boolean;
			downloadLink: string;
			acsTokenLink: string;
		};
		pdf: {
			isAvailable: boolean;
			downloadLink: string;
			acsTokenLink: string;
		};
		webReaderLink: string;
		accessViewStatus: string;
		downloadAccess: {
			kind: "books#downloadAccessRestriction";
			volumeId: string;
			restricted: boolean;
			deviceAllowed: boolean;
			justAcquired: boolean;
			maxDownloadDevices: number;
			downloadsAcquired: number;
			nonce: string;
			source: string;
			reasonCode: string;
			message: string;
			signature: string;
		};
	};
	searchInfo: {
		textSnippet: string;
	};
}

export interface GetGoogleBooksApi {
	kind: string;
	totalItems: number;
	items?: IGoogleBooksApi[];
}

export const googleBooksApi = axios.create({
	baseURL: "https://www.googleapis.com/books/v1/volumes",
});
