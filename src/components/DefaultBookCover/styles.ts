import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import LogoMimir from "../../assets/logo.svg";

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.SECONDARY};
	flex: 1;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 10px;
`;

export const Logo = styled(LogoMimir)``;

export const BookTitle = styled.Text.attrs({ numberOfLines: 2 })<{
	size?: "small" | "medium" | "large";
}>`
	margin-top: 15px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.WHITE};
	text-align: center;

	${({ size }) => {
		switch (size) {
			case "small":
				return css`
					font-size: ${RFValue(11)}px;
				`;
			case "medium":
				return css`
					font-size: ${RFValue(13)}px;
				`;
			default:
				return css`
					font-size: ${RFValue(15)}px;
				`;
		}
	}}
`;
export const BookAuthor = styled.Text.attrs({ numberOfLines: 2 })<{
	size?: "small" | "medium" | "large";
}>`
	font-family: ${({ theme }) => theme.fonts.medium};
	color: ${({ theme }) => theme.colors.WHITE};
	text-align: center;

	${({ size }) => {
		switch (size) {
			case "small":
				return css`
					font-size: ${RFValue(9)}px;
				`;
			case "medium":
				return css`
					font-size: ${RFValue(11)}px;
				`;
			default:
				return css`
					font-size: ${RFValue(13)}px;
				`;
		}
	}}
`;
