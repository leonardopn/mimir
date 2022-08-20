import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StepOne } from "../../pages/InsertBook/StepOne";

const Stack = createStackNavigator();

export const stackName = "insertBook";

export function InsertBookRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={`${stackName}-stepOne`} component={StepOne} />
		</Stack.Navigator>
	);
}
