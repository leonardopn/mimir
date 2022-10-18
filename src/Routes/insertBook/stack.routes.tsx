import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StepOne } from "../../pages/InsertBook/StepOne";
import { StepTwo } from "../../pages/InsertBook/StepTwo";
import { StepThree } from "../../pages/InsertBook/StepThree";
import { StepFour } from "../../pages/InsertBook/StepFour";

export type RootStackParamList = {
	"insertBook-stepOne": undefined;
	"insertBook-stepTwo": undefined;
	"insertBook-stepThree": undefined;
	"insertBook-stepFour": undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
export const stackName = "insertBook";

export function InsertBookRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="insertBook-stepOne" component={StepOne} />
			<Stack.Screen name="insertBook-stepTwo" component={StepTwo} />
			<Stack.Screen name="insertBook-stepThree" component={StepThree} />
			<Stack.Screen name="insertBook-stepFour" component={StepFour} />
		</Stack.Navigator>
	);
}
