import React from "react";
import { Control, Controller, FieldError, FieldPath, FieldValues, RegisterOptions } from "react-hook-form";
import { InputProps } from "../Input/index";
import { InputMultiLine } from "../InputMultiLine";

interface InputMultiLineFormProps<T extends FieldValues> extends InputProps {
	//*React Hook Form
	error?: FieldError;
	enableTextError?: boolean;
	control?: Control<T>;
	name: FieldPath<T>;
	rules?: RegisterOptions<T>;
}

export function InputMultiLineForm<T extends FieldValues>({
	name,
	control,
	rules,
	error,
	...rest
}: InputMultiLineFormProps<T>) {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange, value } }) => (
				<InputMultiLine
					onChangeText={onChange}
					value={value as string}
					errorMessage={error?.message}
					{...rest}
				/>
			)}
		/>
	);
}
