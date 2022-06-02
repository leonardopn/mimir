import React, { useState } from "react";
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
	const [isFocused, setIsFocused] = useState(false);

	function toggleIsFocused() {
		setIsFocused(!isFocused);
	}

	return (
		<>
			{errorMessage ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container
				textAlignVertical="top"
				error={errorMessage}
				multiline={multiline}
				numberOfLines={numberOfLines}
				isFocused={isFocused}
				onFocus={toggleIsFocused}
				{...rest}
				onBlur={e => {
					toggleIsFocused();
					rest.onBlur && rest.onBlur(e);
				}}
			/>
			{errorMessage && <Error>{errorMessage}</Error>}
		</>
	);
}
