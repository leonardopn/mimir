import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container, Error, Label } from "./styles";

export interface InputProps extends TextInputProps {
	label?: string;
	errorMessage?: string;
}

function Input({ label, errorMessage, ...rest }: InputProps, ref: React.Ref<TextInput>) {
	return (
		<>
			{errorMessage ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container error={errorMessage} ref={ref} {...rest} />
			{errorMessage && <Error>{errorMessage}</Error>}
		</>
	);
}

export default forwardRef(Input);
