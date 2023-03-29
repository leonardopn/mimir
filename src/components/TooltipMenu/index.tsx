import { HoldItem } from "react-native-hold-menu";
import { HoldItemProps } from "react-native-hold-menu/lib/typescript/components/holdItem";
import { MenuItemProps } from "react-native-hold-menu/lib/typescript/components/menu/types";
import { MarkOptional } from "ts-essentials";
import { OptionsButton } from "./styles";

export type TooltipMenuItem = MenuItemProps;

export interface TooltipMenuProps extends MarkOptional<HoldItemProps, "children"> {}

export function TooltipMenu({ children, ...restProps }: TooltipMenuProps) {
	return (
		<HoldItem activateOn="tap" {...restProps}>
			{children ? children : <OptionsButton iconFamily="entypo" name="dots-three-vertical" />}
		</HoldItem>
	);
}
