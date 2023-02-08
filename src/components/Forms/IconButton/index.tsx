import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Color } from "../../../types/Theme";
import { VectorIconProps } from "../../VectorIcon";

import { Container, Icon } from "./styles";

interface IconButtonProps extends TouchableOpacityProps {
	icon: VectorIconProps;
	color?: Color | string;
	iconColor?: Color | string;
}

export function IconButton({ icon, iconColor, ...rest }: IconButtonProps) {
	return (
		<Container {...rest}>
			<Icon iconColor={iconColor} {...icon} />
		</Container>
	);
}
