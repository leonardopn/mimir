import React, { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { Book } from "../types/Books";

export interface InsertBookForm extends Omit<Book, "id"> {}

interface FormInsertBookProviderProps {
	children: ReactNode;
}

interface FormInsertBookContextProps {
	form: UseFormReturn<InsertBookForm, any>;
}

const FormInsertBookContext = createContext({} as FormInsertBookContextProps);

export function FormInsertBookProvider({ children }: FormInsertBookProviderProps) {
	//TODO: Implementar validador do yup
	const form = useForm<InsertBookForm>({
		defaultValues: {
			isFavorited: false,
			isWished: false,
			author: "",
			title: "",
			description: "",
			image: "",
			publisher: "",
		},
	});

	return (
		<FormInsertBookContext.Provider value={{ form }}>{children}</FormInsertBookContext.Provider>
	);
}

export const useFormInsertBookContext = () => useContext(FormInsertBookContext);
