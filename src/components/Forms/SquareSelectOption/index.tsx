import React, { forwardRef, ReactNode, useState } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Spacer } from "../../Spacer";
import { VectorIconProps } from "../../VectorIcon";
import { Container, Content, Icon, Text } from "./styles";

interface SquareSelectOptionProps extends Omit<TouchableOpacityProps, "accessibilityRole"> {
	children: ReactNode;
	icon: VectorIconProps;
	color?: string;
	value?: boolean;
}

function SquareSelectOption(
	{ children, icon, color, value, ...rest }: SquareSelectOptionProps,
	ref: React.Ref<TouchableOpacity> | undefined
) {
	const [internValue, setInternValue] = useState(false);

	return (
		<Container ref={ref as any} onPress={() => setInternValue(!internValue)} {...rest}>
			<Content selected={value !== undefined ? value : internValue} color={color}>
				<Icon {...icon} />
				<Spacer spacing={4} />
				<Text>{children}</Text>
			</Content>
		</Container>
	);
}

export default forwardRef(SquareSelectOption);
