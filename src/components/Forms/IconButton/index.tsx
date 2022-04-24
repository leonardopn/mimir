import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";


interface IconButtonProps extends TouchableOpacityProps {}
export function IconButton({ children, ...rest }: IconButtonProps) {
    return <Container {...rest}>{children}</Container>;
}
