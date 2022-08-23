import React, { ReactNode } from "react";
import { Container, Icon, Text, ArrowIcon } from "./styles";
import { VectorIconProps } from "../VectorIcon";
import { TouchableOpacityProps } from "react-native";

interface ButtonSelectStepProps extends Omit<TouchableOpacityProps, "accessibilityRole"> {
	children: ReactNode;
	icon: VectorIconProps;
	color?: string;
}

export function ButtonSelectStep({ children, icon, color, ...rest }: ButtonSelectStepProps) {
	return (
		<Container color={color} {...rest}>
			<Icon {...icon} />
			<Text>{children}</Text>
			<ArrowIcon iconFamily="material" name="keyboard-arrow-right" />
		</Container>
	);
}
