import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Color } from "../../../types/Theme";
import { Container, TextButton } from "./styles";

interface ButtonProps {
	title: string;
	variant?: Color;
	style?: StyleProp<ViewStyle>;
	autoSize?: boolean;
}

export function Button({ title, variant = "SUCCESS", style, autoSize }: ButtonProps) {
	return (
		<Container style={style} variant={variant} autoSize={autoSize}>
			<TextButton>{title}</TextButton>
		</Container>
	);
}
