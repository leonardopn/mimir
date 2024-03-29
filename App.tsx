import "expo-dev-client";
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
import { Header } from "./src/components/Header";
import { ControllerProvider } from "./src/context/Form.context";
import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/Routes/app.bottomTab.routes";
import { store, persistor } from "./src/store/store";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import { BarCodeScannerProvider } from "./src/context/BarCodeScanner.context";
import { ScreenOrientationProvider } from "./src/context/ScreenOrientation.context";
import { FormInsertBookProvider } from "./src/context/FormInsertBook.context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
							<GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
								<BarCodeScannerProvider>
									<StatusBar backgroundColor={theme.colors.PRIMARY} />
									<Header />
									<NavigationContainer>
										<FormInsertBookProvider>
											<AppRoutes />
										</FormInsertBookProvider>
									</NavigationContainer>
								</BarCodeScannerProvider>
							</GestureHandlerRootView>
						</ScreenOrientationProvider>
					</ControllerProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
