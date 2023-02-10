import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StepOne } from "../../pages/InsertBook/StepOne";
import { StepTwo } from "../../pages/InsertBook/StepTwo";
import { StepThree } from "../../pages/InsertBook/StepThree";
import { StepFour } from "../../pages/InsertBook/StepFour";
import { SearchBook } from "../../pages/Book/SearchBook";
import { SearchBookResult } from "../../pages/Book/SearchBookResult";
import { BarCodeScan } from "../../pages/BarCodeScan";

export type InsertBookStackParamList = {
	"insertBook-stepOne": undefined;
	"insertBook-stepTwo": undefined;
	"insertBook-stepThree": undefined;
	"insertBook-stepFour": undefined;
	"Book-search": undefined;
	"Book-search-result": { search: string };
	"Book-search-barcode": { onScanSuccess: (data: string) => void };
};

const Stack = createStackNavigator<InsertBookStackParamList>();
export const stackName = "insertBook";

export function InsertBookRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="insertBook-stepOne" component={StepOne} />
			<Stack.Screen name="Book-search" component={SearchBook} />
			<Stack.Screen name="Book-search-barcode" component={BarCodeScan} />
			<Stack.Screen name="Book-search-result" component={SearchBookResult} />
			<Stack.Screen name="insertBook-stepTwo" component={StepTwo} />
			<Stack.Screen name="insertBook-stepThree" component={StepThree} />
			<Stack.Screen name="insertBook-stepFour" component={StepFour} />
		</Stack.Navigator>
	);
}
