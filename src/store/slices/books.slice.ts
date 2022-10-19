import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from "immutability-helper";
import { Book } from "../../types/Books";

export type BooksState = Readonly<{ data: Book[]; isFetching: boolean; isError: boolean }>;

const initialState: BooksState = {
	data: [],
	isFetching: false,
	isError: false,
};

export const BooksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<Book[]>) =>
			update(state, { data: { $set: action.payload } }),
		addBook: (state, action: PayloadAction<Book>) =>
			update(state, { data: { $push: [action.payload] } }),
		setFetching: (state, action: PayloadAction<boolean>) =>
			update(state, { isFetching: { $set: action.payload } }),
		setIsError: (state, action: PayloadAction<boolean>) =>
			update(state, { isError: { $set: action.payload } }),
	},
});

export const { setIsError, setFetching, addBook } = BooksSlice.actions;

export default BooksSlice.reducer;
