import React, { createContext, ReactNode, useContext } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

interface ScreenOrientationProviderProps {
	children: ReactNode;
}
type ScreenVariant = "UP" | "DOWN" | "LEFT" | "RIGHT" | "DEFAULT";

interface ScreenOrientationContextProps {
	changeScreenOrientation: (orientationLock: ScreenVariant) => Promise<void>;
}

const ScreenOrientationContext = createContext({} as ScreenOrientationContextProps);

export function ScreenOrientationProvider({ children }: ScreenOrientationProviderProps) {
	async function changeScreenOrientation(orientationLock: ScreenVariant) {
		let orientation = ScreenOrientation.OrientationLock.PORTRAIT_UP;

		switch (orientationLock) {
			case "UP":
				orientation = ScreenOrientation.OrientationLock.PORTRAIT_UP;
				break;
			case "DOWN":
				orientation = ScreenOrientation.OrientationLock.PORTRAIT_DOWN;
				break;
			case "LEFT":
				orientation = ScreenOrientation.OrientationLock.LANDSCAPE_LEFT;
				break;
			case "RIGHT":
				orientation = ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT;
				break;
			default:
				orientation = ScreenOrientation.OrientationLock.PORTRAIT_UP;
				break;
		}

		await ScreenOrientation.lockAsync(orientation);
	}

	return (
		<ScreenOrientationContext.Provider value={{ changeScreenOrientation }}>
			{children}
		</ScreenOrientationContext.Provider>
	);
}

export const useScreenOrientationContext = () => useContext(ScreenOrientationContext);
