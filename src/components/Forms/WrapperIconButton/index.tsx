import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";

interface WrapperIconButtonProps extends TouchableOpacityProps {}
export function WrapperIconButton({ children, ...rest }: WrapperIconButtonProps) {
	return <Container {...rest}>{children}</Container>;
}
