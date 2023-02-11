import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BarCodeScan } from "../pages/BarCodeScan";
import { BookView } from "../pages/Book/BookView";
import { SearchBook } from "../pages/Book/SearchBook";
import { SearchBookResult } from "../pages/Book/SearchBookResult";
import { Dashboard } from "../pages/Dashboard";
import { InsertBook } from "../pages/InsertBook";
import { Book } from "../types/Books";
import { RootBottomTabParamList } from "./app.bottomTab.routes";
import { InsertBookRoutesParams } from "./InsertBook/index.stack.routes";

export type BookStackRoutesParams = {
	"Book-view": { book: Book };
	"Book-search": undefined;
	"Book-search-result": { search: string };
	"Book-search-barcode": { onScanSuccess: (data: string) => void };
};

export type DashboardStackRoutesParams = {
	"Dashboard-root": undefined;
};

export type AppStackRoutesParams = DashboardStackRoutesParams &
	BookStackRoutesParams &
	InsertBookRoutesParams;

const Stack = createStackNavigator<AppStackRoutesParams>();

interface AppStackRoutesProps extends BottomTabScreenProps<RootBottomTabParamList> {}

export function AppStackRoutes({ route }: AppStackRoutesProps) {
	const { defaultRoute } = route.params;

	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={defaultRoute}>
			<Stack.Group>
				<Stack.Screen name="Dashboard-root" component={Dashboard} />
			</Stack.Group>
			<Stack.Group>
				<Stack.Screen name="Book-view" component={BookView} />
				<Stack.Screen name="Book-search" component={SearchBook} />
				<Stack.Screen name="Book-search-barcode" component={BarCodeScan} />
				<Stack.Screen name="Book-search-result" component={SearchBookResult} />
			</Stack.Group>
			<Stack.Screen name="insertBook-root" component={InsertBook} />
		</Stack.Navigator>
	);
}
