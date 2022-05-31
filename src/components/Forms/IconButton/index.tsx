import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Color } from "../../../types/Theme";
import { VectorIconProps } from "../../VectorIcon";

import { Container, Icon } from "./styles";

interface IconButtonProps extends TouchableOpacityProps {
	icon: VectorIconProps;
	color?: Color | string;
}

export function IconButton({ icon, ...rest }: IconButtonProps) {
	return (
		<Container {...rest}>
			<Icon {...icon} />
		</Container>
	);
}
