import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BookView } from "../../pages/Book/BookView";
import { Dashboard } from "../../pages/Dashboard";
import { BookStackParamList } from "../Book/stack.routes";

export type DashboardStackParamList = {
	"Dashboard-root": undefined;
} & BookStackParamList;

const Stack = createStackNavigator<DashboardStackParamList>();

export function DashboardStackRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Dashboard-root" component={Dashboard} />
			<Stack.Screen name="Book-view" component={BookView} />
		</Stack.Navigator>
	);
}
