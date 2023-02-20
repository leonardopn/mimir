import { useScreenOrientationContext } from "../context/ScreenOrientation.context";

export function useScreenOrientation() {
	const context = useScreenOrientationContext();

	if (!context) {
		throw new Error("useScreenOrientation must be used within a ScreenOrientationProvider");
	}

	return context;
}
