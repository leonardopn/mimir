import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BarCodeScan } from "../pages/BarCodeScan";
import { BookView } from "../pages/Book/BookView";
import { SearchBook } from "../pages/Book/SearchBook";
import { SearchBookInformation } from "../pages/Book/SearchBookInformation";
import { SearchBookResult } from "../pages/Book/SearchBookResult";
import { Dashboard } from "../pages/Dashboard";
import { StepFour } from "../pages/InsertBook/StepFour";
import { StepOne } from "../pages/InsertBook/StepOne";
import { StepThree } from "../pages/InsertBook/StepThree";
import { StepTwo } from "../pages/InsertBook/StepTwo";
import { Book } from "../types/Books";
import { RootBottomTabParamList } from "./app.bottomTab.routes";

export type InsertBookRoutesParams = {
	"insertBook-root": undefined;
	"insertBook-stepOne": undefined;
	"insertBook-stepTwo": undefined;
	"insertBook-stepThree": undefined;
	"insertBook-stepFour": undefined;
};

export type BookStackRoutesParams = {
	"Book-view": { book: Book };
	"Book-search": undefined;
	"Book-search-result": { search: string };
	"Book-search-barcode": undefined;
	"Book-search-information": { book: Book };
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
				<Stack.Screen name="Book-search-information" component={SearchBookInformation} />
			</Stack.Group>
			<Stack.Group>
				<Stack.Screen name="insertBook-stepOne" component={StepOne} />
				<Stack.Screen name="insertBook-stepTwo" component={StepTwo} />
				<Stack.Screen name="insertBook-stepThree" component={StepThree} />
				<Stack.Screen name="insertBook-stepFour" component={StepFour} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
