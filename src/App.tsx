import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    useFonts,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React from "react";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Header } from "./components/Header";
import theme from "./global/styles/theme";
import { Dashboard } from "./pages/Dashboard";
import { AppRoutes } from "./Routes/app.routes";

export default function App() {
    const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold });

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    }

    return (
        <ThemeProvider theme={theme}>
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={theme.colors.PRIMARY} />
                <Header></Header>
                <NavigationContainer>
                    <AppRoutes></AppRoutes>
                </NavigationContainer>
            </View>
        </ThemeProvider>
    );
}
