import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
	flex: 1;
	padding: 20px;
`;

export const Content = styled.ScrollView`
	margin-top: 10px;
`;

export const ContentHeader = styled.View`
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
`;

export const BookInformations = styled.View.attrs(({ theme }) => ({ ...theme.shadow.default }))`
	background-color: white;
	border-radius: ${RFValue(10)}px;
	padding: 15px;
	margin: 5px;
`;

export const BookInformationWrapper = styled.View<{ justify?: boolean }>`
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;

	${({ justify }) =>
		justify &&
		css`
			justify-content: center;
		`}
`;

export const MainInfo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: justify;
`;

export const SimpleInfo = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(13)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: justify;
`;
