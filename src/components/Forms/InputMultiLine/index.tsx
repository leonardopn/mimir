import React from "react";
import { TextInputProps } from "react-native";
import { Container, Error, Label } from "./styles";

export interface InputMultiLineFormProps extends TextInputProps {
	label?: string;
	errorMessage?: string;
}

export function InputMultiLine({
	label,
	errorMessage,
	multiline = true,
	numberOfLines = 4,
	...rest
}: InputMultiLineFormProps) {
	return (
		<>
			{errorMessage ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container
				textAlignVertical="top"
				error={errorMessage}
				multiline={multiline}
				numberOfLines={numberOfLines}
				{...rest}
			/>
			{errorMessage && <Error>{errorMessage}</Error>}
		</>
	);
}
