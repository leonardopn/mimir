import React from "react";
import { StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";
import { Color } from "../../../types/Theme";
import { Container, TextButton } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	variant?: Color;
	style?: StyleProp<ViewStyle>;
	autoSize?: boolean;
}

export function Button({ title, variant = "SUCCESS", style, autoSize, ...rest }: ButtonProps) {
	return (
		<Container style={style} variant={variant} autoSize={autoSize} {...rest}>
			<TextButton>{title}</TextButton>
		</Container>
	);
}
