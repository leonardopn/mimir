import React from "react";
import { Container, Icon, Text, ArrowIcon } from "./styles";
import { VectorIconProps } from "../VectorIcon";

interface ButtonSelectStepProps {
	children: string;
	icon: VectorIconProps;
    color?: string;
}

export function ButtonSelectStep({ children, icon, color }: ButtonSelectStepProps) {
	return (
		<Container color={color}>
			<Icon {...icon} />
			<Text>{children}</Text>
			<ArrowIcon iconFamily="material" name="keyboard-arrow-right" />
		</Container>
	);
}
