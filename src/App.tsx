import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    useFonts
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import React from "react";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "./global/styles/theme";

export default function App() {
    const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold });

    if (!fontsLoaded) {
        return <AppLoading></AppLoading>;
    }

    return (
        <ThemeProvider theme={theme}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Olá mundo</Text>
            </View>
        </ThemeProvider>
    );
}
