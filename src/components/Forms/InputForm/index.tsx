import React from "react";
import {
	Control,
	Controller,
	FieldError,
	FieldPath,
	RegisterOptions,
	FieldValues,
} from "react-hook-form";
import Input from "../Input";
import { InputProps } from "../Input/index";

export interface InputFormProps<T extends FieldValues> extends InputProps {
	//*React Hook Form
	error?: FieldError;
	enableTextError?: boolean;
	control?: Control<T>;
	name: FieldPath<T>;
	rules: RegisterOptions<T>;
}

export function InputForm<T extends FieldValues>({
	name,
	control,
	rules,
	error,
	...rest
}: InputFormProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value, onBlur, ref } }) => (
				<Input
					{...rest}
					onChangeText={onChange}
					value={value as string}
					errorMessage={error?.message}
					onBlur={onBlur}
					ref={ref}
				/>
			)}
		/>
	);
}
