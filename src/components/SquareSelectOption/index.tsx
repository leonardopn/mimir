import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import { Spacer } from "../Spacer";
import { VectorIconProps } from "../VectorIcon";
import { Container, Icon, Text } from "./styles";

interface SquareSelectOptionProps extends Omit<TouchableOpacityProps, "accessibilityRole"> {
	children: ReactNode;
	icon: VectorIconProps;
	color?: string;
}

export function SquareSelectOption({ children, icon, color, ...rest }: SquareSelectOptionProps) {
	return (
		<Container color={color} {...rest}>
			<Icon {...icon} />
			<Spacer spacing={4} />
			<Text>{children}</Text>
		</Container>
	);
}
