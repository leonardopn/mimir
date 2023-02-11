import React from "react";
import { TextProps } from "react-native";
import { Container } from "./styles";

interface TitleProps extends TextProps {
	children: string;
}

export function Title({ children, ...rest }: TitleProps) {
	return <Container {...rest}>{children}</Container>;
}
