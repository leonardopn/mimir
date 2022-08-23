import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StepOne } from "../../pages/InsertBook/StepOne";
import { StepTwo } from "../../pages/InsertBook/StepTwo";

export type RootStackParamList = {
	"insertBook-stepOne": undefined;
	"insertBook-stepTwo": undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export const stackName = "insertBook";

export function InsertBookRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="insertBook-stepOne" component={StepOne} />
			<Stack.Screen name="insertBook-stepTwo" component={StepTwo} />
		</Stack.Navigator>
	);
}
