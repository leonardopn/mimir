import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "styled-components";
import { useConfigs } from "../hooks/store/useConfigs";
import { useScreenOrientation } from "../hooks/useScreenOrientation";
import { Dashboard } from "../pages/Dashboard";
import { AppStackRoutes, AppStackRoutesParams } from "./app.stack.routes";

type DefaultRouteProps = {
	defaultRoute?: keyof AppStackRoutesParams;
};

export type RootBottomTabParamList = {
	Home: DefaultRouteProps;
	Livros: DefaultRouteProps;
	Favoritos: DefaultRouteProps;
	Adicionar: DefaultRouteProps;
};

const { Navigator, Screen } = createBottomTabNavigator<RootBottomTabParamList>();

export function AppRoutes() {
	const theme = useTheme();
	const {
		functions: { updateConfigs },
		state: { showBottomNavbar, isFullScreen },
	} = useConfigs();
	const { changeScreenOrientation } = useScreenOrientation();

	useEffect(() => {
		changeScreenOrientation("DEFAULT");
		updateConfigs({ showBottomNavbar: true, isFullScreen: false, showTopNavbar: true });
	}, [changeScreenOrientation, updateConfigs]);

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
				component={AppStackRoutes}
				initialParams={{ defaultRoute: "Dashboard-root" }}
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
				component={AppStackRoutes}
				initialParams={{ defaultRoute: "insertBook-stepOne" }}
			/>
		</Navigator>
	);
}
