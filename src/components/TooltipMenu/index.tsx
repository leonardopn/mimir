import { useState } from "react";
import { Menu, MenuDivider, MenuItem, MenuItemProps, MenuProps } from "react-native-material-menu";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { IconProps } from "../VectorIcon";
import { MenuItemIcon, OptionsButton } from "./styles";

export interface TooltipMenuItem extends Omit<MenuItemProps, "children"> {
	isDivider?: boolean;
	title: string;
	icon?: IconProps;
	color?: string;
}

export interface TooltipMenuProps {
	menuProps?: MenuProps;
	items: TooltipMenuItem[];
	closeOnPress?: boolean;
}

export function TooltipMenu({ menuProps, items, closeOnPress = true }: TooltipMenuProps) {
	const [visible, setVisible] = useState(false);

	const hideMenu = () => setVisible(false);

	const showMenu = () => setVisible(true);

	return (
		<Menu
			animationDuration={100}
			visible={visible}
			anchor={
				<WrapperIconButton onPress={showMenu}>
					<OptionsButton iconFamily="entypo" name="dots-three-vertical" />
				</WrapperIconButton>
			}
			onRequestClose={hideMenu}
			{...menuProps}>
			{items.map((item, index) => {
				const { icon, title, isDivider, color, ...itemRestProps } = item;

				if (isDivider) return <MenuDivider key={index} color={color} />;
				return (
					<MenuItem
						key={index}
						{...itemRestProps}
						onPress={e => {
							closeOnPress && hideMenu();
							itemRestProps.onPress && itemRestProps.onPress(e);
						}}>
						{!!icon && (
							<>
								<MenuItemIcon
									style={{ color: itemRestProps.textStyle?.color }}
									{...icon}
								/>
								{"  "}
							</>
						)}
						{title}
					</MenuItem>
				);
			})}
		</Menu>
	);
}
