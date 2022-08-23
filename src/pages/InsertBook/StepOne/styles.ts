import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled.View`
	flex: 1;
	justify-content: center;
`;

export const TextWrapper = styled.View`
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(17)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: center;
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: center;
	margin-top: 10px;
`;

export const ButtonWrapper = styled.View``;
