import React from "react";
import { TextProps } from "react-native";
import { Container } from "./styles";

interface SubtitleProps extends TextProps {
	children: string;
}

export function Subtitle({ children, ...rest }: SubtitleProps) {
	return <Container {...rest}>{children}</Container>;
}
