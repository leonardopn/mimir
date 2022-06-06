import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import update from "immutability-helper";
import { Book } from "../types/Books";

export type BooksState = Readonly<{ books: Book[]; isFetching: boolean; isError: boolean }>;

const initialState: BooksState = {
	books: [],
	isFetching: false,
	isError: false,
};

export const BooksSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		setBooks: (state, action: PayloadAction<Book[]>) =>
			update(state, { books: { $set: action.payload } }),
		setFetching: (state, action: PayloadAction<boolean>) =>
			update(state, { isFetching: { $set: action.payload } }),
		setIsError: (state, action: PayloadAction<boolean>) =>
			update(state, { isError: { $set: action.payload } }),
	},
});

export const { setIsError, setFetching } = BooksSlice.actions;

export default BooksSlice.reducer;
