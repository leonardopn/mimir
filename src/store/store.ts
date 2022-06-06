import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./books.slice";

export const store = configureStore({
	reducer: {
		books: BooksSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
