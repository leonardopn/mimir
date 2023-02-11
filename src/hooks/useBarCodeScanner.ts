import { useBarCodeScannerContext } from "../context/BarCodeScanner.context";

export function useBarCodeScanner() {
	const context = useBarCodeScannerContext();

	if (!context) {
		throw new Error("useBarCodeScanner must be used within a BarCodeScannerProvider");
	}

	return context;
}
