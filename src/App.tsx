import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { Header } from "./components/Header";
import { ControllerProvider } from "./context/Form.context";
import theme from "./global/styles/theme";
import { AppRoutes } from "./Routes/app.bottomTab.routes";
import { store, persistor } from "./store/store";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { BarCodeScannerProvider } from "./context/BarCodeScanner.context";
import { ScreenOrientationProvider } from "./context/ScreenOrientation.context";

export default function App() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await SplashScreen.preventAutoHideAsync();
				await Font.loadAsync({
					Montserrat_400Regular,
					Montserrat_500Medium,
					Montserrat_700Bold,
				});

				await new Promise(resolve => setTimeout(resolve, 5000));
			} catch (e) {
				console.warn(e);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return (
			<View>
				<Text>Carregando...</Text>
			</View>
		);
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<ControllerProvider>
						<ScreenOrientationProvider>
							<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
								<BarCodeScannerProvider>
									<StatusBar backgroundColor={theme.colors.PRIMARY} />
									<Header />
									<NavigationContainer>
										<AppRoutes />
									</NavigationContainer>
								</BarCodeScannerProvider>
							</View>
						</ScreenOrientationProvider>
					</ControllerProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
