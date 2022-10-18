import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
interface ContainerProps {
	error?: string;
	isFocused?: boolean;
}

export const Container = styled(TextInput)<ContainerProps>`
	background-color: white;
	border-radius: 10px;
	height: ${RFValue(60)}px;
	padding: 15px;
	border: ${({ error, isFocused }) => (error || isFocused ? "2px" : "1px")} solid
		${({ theme, error, isFocused }) =>
			error
				? theme.colors.ATTENTION
				: isFocused
				? theme.colors.PRIMARY
				: theme.colors.TEXT_LIGHT};
`;

export const Label = styled.Text`
	padding-bottom: 4px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.TEXT};
`;

export const Error = styled.Text`
	padding: 4px 0;
	font-family: ${({ theme }) => theme.fonts.medium};
	color: ${({ theme }) => theme.colors.ATTENTION};
`;
