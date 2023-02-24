import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View.attrs(({ theme }) => ({ ...theme.shadow.default }))<{
	size?: "small" | "medium" | "large";
}>`
	border-radius: 10px;
	background-color: ${({ theme }) => theme.colors.BACKGROUND};

	${({ size }) => {
		switch (size) {
			case "small":
				return css`
					width: ${RFValue(94)}px;
					height: ${RFValue(146)}px;
				`;
			case "medium":
				return css`
					width: ${RFValue(150)}px;
					height: ${RFValue(230)}px;
				`;
			default:
				return css`
					height: ${RFValue(300)}px;
					width: ${RFValue(200)}px;
				`;
		}
	}}
`;

export const Image = styled.Image<{ radiusAll: boolean }>`
	flex: 1;
	border-radius: 10px;

	${({ radiusAll }) =>
		radiusAll &&
		css`
			border-radius: 10px;
		`}
`;
