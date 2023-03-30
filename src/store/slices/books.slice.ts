import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from "immutability-helper";
import { Book } from "../../types/Books";

export type BooksState = Readonly<{ data: Book[]; isFetching: boolean; isError: boolean }>;

const initialState: BooksState = {
	data: [],
	isFetching: false,
	isError: false,
};

function findIndex(arr: Book[], id: string) {
	return arr.findIndex(item => item.id === id);
}

export const BooksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<Book[]>) =>
			update(state, { data: { $set: action.payload } }),
		addBook: (state, action: PayloadAction<Book>) =>
			update(state, { data: { $push: [action.payload] } }),
		deleteBook: (state, action: PayloadAction<string>) => {
			const index = findIndex(state.data, action.payload);

			if (index === -1) return state;

			return update(state, { data: { $splice: [[index, 1]] } });
		},
		setFetching: (state, action: PayloadAction<boolean>) =>
			update(state, { isFetching: { $set: action.payload } }),
		setIsError: (state, action: PayloadAction<boolean>) =>
			update(state, { isError: { $set: action.payload } }),
	},
});

export const { setIsError, setFetching, addBook, deleteBook } = BooksSlice.actions;

export default BooksSlice.reducer;
