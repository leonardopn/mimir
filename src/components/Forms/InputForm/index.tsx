import React from "react";
import { Control, Controller, FieldError, FieldPath, RegisterOptions } from "react-hook-form";
import Input from "../Input";
import { InputProps } from "../Input/index";

interface InputFormProps<T> extends InputProps {
	//*React Hook Form
	error?: FieldError;
	enableTextError?: boolean;
	control?: Control<T>;
	name: FieldPath<T>;
	rules?: RegisterOptions<T>;
}

export function InputForm<T>({ name, control, rules, error, ...rest }: InputFormProps<T>) {
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
