import React, { forwardRef, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Container, Error, Label } from "./styles";

export interface InputProps extends TextInputProps {
	label?: string;
	errorMessage?: string;
}

function Input({ label, errorMessage, ...rest }: InputProps, ref: React.Ref<TextInput>) {
	const [isFocused, setIsFocused] = useState(false);

	function toggleIsFocused() {
		setIsFocused(!isFocused);
	}

	return (
		<>
			{errorMessage ? <Error>{label}</Error> : label && <Label>{label}</Label>}
			<Container
				error={errorMessage}
				ref={ref}
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

export default forwardRef(Input);
