import React, { ReactNode } from "react";
import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { TouchableOpacityProps } from "react-native";
import { VectorIconProps } from "../../VectorIcon";
import SquareSelectOption from "../SquareSelectOption";

interface SquareSelectOptionFormProps<T extends FieldValues>
	extends Omit<TouchableOpacityProps, "accessibilityRole"> {
	children: ReactNode;
	icon: VectorIconProps;
	color?: string;

	//*React Hook Form
	enableTextError?: boolean;
	control?: Control<T>;
	name: FieldPath<T>;
	rules?: RegisterOptions<T>;
}

export function SquareSelectOptionForm<T extends FieldValues>({
	children,
	icon,
	color,
	name,
	control,
	rules,
	...rest
}: SquareSelectOptionFormProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value, onBlur, ref } }) => (
				<SquareSelectOption
					{...rest}
					ref={ref}
					icon={icon}
					color={color}
					value={value as boolean}
					onBlur={onBlur}
					onPress={() => onChange(!value)}>
					{children}
				</SquareSelectOption>
			)}
		/>
	);
}
