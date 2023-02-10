import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import booksSlice from "../slices/books.slice";
import configsSlice from "../slices/configs.slice";

const rootPersistConfig = {
	key: "root",
	storage: AsyncStorage,
	keyPrefix: "redux-",
};

const booksPersistConfig = {
	...rootPersistConfig,
	key: "books",
};

const rootReducer = combineReducers({
	books: persistReducer(booksPersistConfig, booksSlice),
	configs: configsSlice,
});

export { rootPersistConfig, rootReducer };
