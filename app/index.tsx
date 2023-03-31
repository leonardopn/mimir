import {
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import "expo-dev-client";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { StatusBar, Text, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components/native";
import { AppRoutes } from "../src/Routes/app.bottomTab.routes";
import { Header } from "../src/components/Header";
import { BarCodeScannerProvider } from "../src/context/BarCodeScanner.context";
import { ControllerProvider } from "../src/context/Form.context";
import { FormInsertBookProvider } from "../src/context/FormInsertBook.context";
import { ScreenOrientationProvider } from "../src/context/ScreenOrientation.context";
import theme from "../src/global/styles/theme";
import { persistor, store } from "../src/store/store";
import { Link } from "expo-router";

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

									<FormInsertBookProvider>
										{/* <AppRoutes /> */}
										<View style={{ flex: 1, justifyContent: "center" }}>
											<Link href="./Dashboard">Home</Link>
										</View>
									</FormInsertBookProvider>
								</BarCodeScannerProvider>
							</GestureHandlerRootView>
						</ScreenOrientationProvider>
					</ControllerProvider>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	);
}
