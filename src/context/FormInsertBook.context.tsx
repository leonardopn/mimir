import React, { createContext, ReactNode, useContext } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { Book } from "../types/Books";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/src/yup";

export interface InsertBookForm extends Omit<Book, "id"> {}

interface FormInsertBookProviderProps {
	children: ReactNode;
}

interface FormInsertBookContextProps {
	form: UseFormReturn<InsertBookForm, any>;
	defaultValues: Partial<InsertBookForm>;
}

const schema = yup
	.object({
		title: yup.string().required("Título é obrigatório"),
		author: yup.string().required("Autor é obrigatório"),
		publisher: yup.string().required("Editora é obrigatória"),
	})
	.required();

const FormInsertBookContext = createContext({} as FormInsertBookContextProps);

export function FormInsertBookProvider({ children }: FormInsertBookProviderProps) {
	const defaultValues: FormInsertBookContextProps["defaultValues"] = {
		isFavorited: false,
		isWished: false,
		author: "",
		title: "",
		description: "",
		image: "",
		publisher: "",
		isbn10: "",
		isbn13: "",
	};

	//TODO: Implementar validador do yup
	const form = useForm<InsertBookForm>({
		resolver: yupResolver(schema),
		defaultValues,
	});

	return (
		<FormInsertBookContext.Provider value={{ form, defaultValues }}>
			{children}
		</FormInsertBookContext.Provider>
	);
}

export const useFormInsertBookContext = () => useContext(FormInsertBookContext);
