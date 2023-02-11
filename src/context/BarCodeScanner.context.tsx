import React, { createContext, ReactNode, useCallback, useContext } from "react";

interface BarCodeScannerProviderProps {
	children: ReactNode;
}

interface BarCodeScannerContextProps {
	setResult: React.Dispatch<React.SetStateAction<string | null>>;
	result: string | null;
	clear: () => void;
}

const BarCodeScannerContext = createContext({} as BarCodeScannerContextProps);

export function BarCodeScannerProvider({ children }: BarCodeScannerProviderProps) {
	const [result, setResult] = React.useState<string | null>(null);

	const clear = useCallback(() => setResult(null), []);

	return (
		<BarCodeScannerContext.Provider value={{ setResult, result, clear }}>
			{children}
		</BarCodeScannerContext.Provider>
	);
}

export const useBarCodeScannerContext = () => useContext(BarCodeScannerContext);
