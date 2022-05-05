import React from "react";
import { TextInputProps } from "react-native";
import { Container, Error, Label } from "./styles";

export interface InputProps extends TextInputProps {
	label?: string;
	errorMessage?: string;
}

export function Input({ label, errorMessage, ...rest }: InputProps) {
	return (
		<>
			{errorMessage ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container error={errorMessage} {...rest} />
			{errorMessage && <Error>{errorMessage}</Error>}
		</>
	);
}
