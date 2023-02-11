import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StepFour } from "../../pages/InsertBook/StepFour";
import { StepOne } from "../../pages/InsertBook/StepOne";
import { StepThree } from "../../pages/InsertBook/StepThree";
import { StepTwo } from "../../pages/InsertBook/StepTwo";

export type InsertBookRoutesParams = {
	"insertBook-root": undefined;
	"insertBook-stepOne": undefined;
	"insertBook-stepTwo": undefined;
	"insertBook-stepThree": undefined;
	"insertBook-stepFour": undefined;
};

const Stack = createStackNavigator<InsertBookRoutesParams>();

export function InsertBookStackRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="insertBook-stepOne" component={StepOne} />
			<Stack.Screen name="insertBook-stepTwo" component={StepTwo} />
			<Stack.Screen name="insertBook-stepThree" component={StepThree} />
			<Stack.Screen name="insertBook-stepFour" component={StepFour} />
		</Stack.Navigator>
	);
}
