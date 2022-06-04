import React, { createContext, ReactNode, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

interface ControllerProviderProps {
	children: ReactNode;
}
interface ControllerContextProps {
	form?: UseFormReturn<any, any>;
	setForm: React.Dispatch<React.SetStateAction<UseFormReturn<any, any> | undefined>>;
}

const ControllerContext = createContext({} as ControllerContextProps);

export function ControllerProvider({ children }: ControllerProviderProps) {
	const [form, setForm] = React.useState<UseFormReturn<any, any>>();

	return (
		<ControllerContext.Provider value={{ form, setForm }}>
			{children}
		</ControllerContext.Provider>
	);
}

export const useControllerContext = () => useContext(ControllerContext);
