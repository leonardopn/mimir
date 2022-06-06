import React, { Dispatch, SetStateAction } from "react";
import { FamilyIconName } from "../../VectorIcon";
import { Container, Icon } from "./styles";

interface ToggleIconButtonProps {
	value: boolean;
	setValue: Dispatch<SetStateAction<boolean>>;
	onPress?: () => void;

	iconFamily: FamilyIconName;
	iconName: string;
	secondaryIconName?: string;
}

export function ToggleIconButton({
	setValue,
	value,
	onPress,
	iconFamily,
	iconName,
	secondaryIconName,
}: ToggleIconButtonProps) {
	function handleToggleIsFavorite() {
		setValue(!value);
		onPress && onPress();
	}

	return (
		<Container onPress={handleToggleIsFavorite}>
			<Icon
				iconFamily={iconFamily}
				name={value ? iconName : secondaryIconName ? secondaryIconName : iconName}
				addWishList={value}
			/>
		</Container>
	);
}
