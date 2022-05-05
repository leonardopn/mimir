import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface ContainerProps {
	error?: string;
}

export const Container = styled.TextInput<ContainerProps>`
	flex: 1;
	background-color: white;
	border-radius: 10px;
	height: ${RFValue(50)}px;
	padding: 15px;
	border: ${({ error }) => (error ? "2px" : "1px")} solid
		${({ theme, error }) => (error ? theme.colors.ATTENTION : theme.colors.TEXT_LIGHT)};
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
