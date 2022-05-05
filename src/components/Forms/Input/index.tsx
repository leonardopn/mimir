import React from "react";
import { TextInputProps } from "react-native";
import { Container, Error, Label } from "./styles";

interface InputProps extends TextInputProps {
	label?: string;
	error?: string;
}

export function Input({ label, error, ...rest }: InputProps) {
	return (
		<>
			{error ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container error={error} {...rest} />
			{error && <Error>{error}</Error>}
		</>
	);
}
