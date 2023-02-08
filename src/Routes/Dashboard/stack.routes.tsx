import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { BookView } from "../../pages/Book/BookView";
import { Dashboard } from "../../pages/Dashboard";

export type BookStackParamList = {
	"Dashboard-root": undefined;
	"Dashboard-bookView": undefined;
};

const Stack = createStackNavigator<BookStackParamList>();

export function DashboardStackRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Dashboard-root" component={Dashboard} />
			<Stack.Screen name="Dashboard-bookView" component={BookView} />
		</Stack.Navigator>
	);
}
