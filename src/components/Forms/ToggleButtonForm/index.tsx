import React from "react";
import {
	Control,
	Controller,
	FieldError,
	FieldPath,
	FieldValues,
	RegisterOptions,
} from "react-hook-form";
import { SwitchProps } from "react-native";
import { ToggleButton } from "../ToggleButton";

export interface ToggleButtonFormProps<T extends FieldValues> extends SwitchProps {
	//*React Hook Form
	error?: FieldError;
	enableTextError?: boolean;
	control?: Control<T>;
	name: FieldPath<T>;
	rules?: RegisterOptions<T>;
}

export function ToggleButtonForm<T extends FieldValues>({
	name,
	rules,
	control,
	...rest
}: ToggleButtonFormProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<ToggleButton onValueChange={onChange} value={value as boolean} {...rest} />
			)}
		/>
	);
}
