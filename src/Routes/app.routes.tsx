import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useTheme } from "styled-components";
import { Dashboard } from "../pages/Dashboard";
import { InsertBook } from "../pages/InsertBook";
import { DashboardStackRoutes } from "./Dashboard/stack.routes";
import { useConfigs } from "../hooks/store/useConfigs";

export type RootBottomTabParamList = {
	Home: undefined;
	Favoritos: undefined;
	Adicionar: undefined;
};

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
	const theme = useTheme();
	const {
		state: { showBottomNavbar, isFullScreen },
	} = useConfigs();

	const showTab = !isFullScreen && showBottomNavbar;

	return (
		<Navigator
			screenOptions={{
				tabBarHideOnKeyboard: true,
				headerShown: false,
				tabBarActiveTintColor: theme.colors.SECONDARY,
				tabBarInactiveTintColor: theme.colors.SECONDARY_LIGHT,
				tabBarLabelPosition: "beside-icon",
				tabBarStyle: {
					height: 65,
					backgroundColor: theme.colors.PRIMARY,
					paddingVertical: Platform.OS === "ios" ? 20 : 0,
					borderTopStartRadius: 15,
					borderTopEndRadius: 15,
					display: showTab ? "flex" : "none",
				},
				unmountOnBlur: true,
			}}>
			<Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<AntDesign name="home" size={size} color={color} />
					),
					tabBarShowLabel: false,
				}}
				name="Home"
				component={DashboardStackRoutes}
			/>
			<Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialCommunityIcons
							name="heart-plus-outline"
							size={size}
							color={color}
						/>
					),
					tabBarShowLabel: false,
				}}
				name="Favoritos"
				component={Dashboard}
			/>

			<Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<Entypo name="book" size={size} color={color} />
					),
					tabBarShowLabel: false,
				}}
				name="Livros"
				component={Dashboard}
			/>
			<Screen
				options={{
					tabBarIcon: ({ size, color }) => (
						<AntDesign name="plussquareo" size={size} color={color} />
					),
					tabBarShowLabel: false,
				}}
				name="Adicionar"
				component={InsertBook}
			/>
		</Navigator>
	);
}
