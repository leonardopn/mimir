import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTheme } from "styled-components";
import { Dashboard } from "../pages/Dashboard";

const { Navigator, Screen } = createBottomTabNavigator();

interface routesProps {}

export function AppRoutes({}: routesProps) {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.secondary_light,
                tabBarLabelPosition: "beside-icon",
                tabBarStyle: {
                    height: 65,
                    backgroundColor: theme.colors.primary,
                    paddingVertical: Platform.OS === "ios" ? 20 : 0,
                    borderTopStartRadius: 15,
                    borderTopEndRadius: 15,
                },
            }}>
            <Screen
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />,
                    tabBarShowLabel: false,
                }}
                name="Home"
                component={Dashboard}
            />
            <Screen
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="hearto" size={size} color={color} />,
                    tabBarShowLabel: false,
                }}
                name="Favoritos"
                component={Dashboard}
            />

            <Screen
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="barcode" size={size} color={color} />,
                    tabBarShowLabel: false,
                }}
                name="Scanner"
                component={Dashboard}
            />
            <Screen
                options={{
                    tabBarIcon: ({ size, color }) => <AntDesign name="plussquareo" size={size} color={color} />,
                    tabBarShowLabel: false,
                }}
                name="Adicionar"
                component={Dashboard}
            />
        </Navigator>
    );
}