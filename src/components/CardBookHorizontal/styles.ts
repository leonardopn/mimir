import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { CardBook } from "../CardBook";

export const Container = styled.View.attrs(({ theme }) => ({ ...theme.shadow.default }))`
	flex-direction: row;
	background-color: white;
	border-radius: ${RFValue(10)}px;
	height: ${RFValue(146)}px;
	margin: 5px;
	overflow: hidden;
`;

export const BookThumb = styled(CardBook).attrs({
	imageStyle: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
})`
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
`;

export const Informations = styled.View`
	margin: 10px;
	flex: 1;
`;

export const InformationWrapper = styled.View<{ justify?: boolean }>`
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	${({ justify }) =>
		justify &&
		css`
			justify-content: center;
		`}
`;

export const MainInfo = styled.Text.attrs({ numberOfLines: 1 })`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(12)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: justify;
`;

export const SimpleInfo = styled.Text.attrs({ numberOfLines: 1 })`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(11)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: justify;
	flex: 1;
`;
