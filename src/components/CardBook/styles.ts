import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View.attrs(({ theme }) => ({ ...theme.shadow.default }))`
	height: ${RFValue(300)}px;
	width: ${RFValue(200)}px;
	margin-right: ${RFValue(20)}px;
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.BACKGROUND};
	margin: 10px;
`;

export const Image = styled.Image<{ radiusAll: boolean }>`
	flex: 1;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;

	${({ radiusAll }) =>
		radiusAll &&
		css`
			border-radius: 10px;
		`}
`;

export const Informations = styled.View`
	padding: 5px;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.TEXT};
	font-size: ${RFValue(11)}px;
	text-align: center;
`;

export const Author = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.TEXT};
	font-size: ${RFValue(8)}px;
	text-align: center;
`;
