import React from "react";
import { SwitchProps } from "react-native";

import { Toggle, Label, Container } from "./styles";

export interface ToggleButtonProps extends SwitchProps {
	label?: string;
}

export function ToggleButton({ label, ...rest }: ToggleButtonProps) {
	return (
		<Container>
			{!!label && <Label>Favorito</Label>}
			<Toggle {...rest} />
		</Container>
	);
}
