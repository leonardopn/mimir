import React, { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

export interface InsertBookForm {}

interface FormInsertBookProviderProps {
	children: ReactNode;
}

interface FormInsertBookContextProps {
	form: UseFormReturn<InsertBookForm, any>;
}

const FormInsertBookContext = createContext({} as FormInsertBookContextProps);

export function FormInsertBookProvider({ children }: FormInsertBookProviderProps) {
	const form = useForm<InsertBookForm>({});

	return (
		<FormInsertBookContext.Provider value={{ form }}>{children}</FormInsertBookContext.Provider>
	);
}

export const useControllerContext = () => useContext(FormInsertBookContext);
