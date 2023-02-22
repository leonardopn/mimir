import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Content = styled.ScrollView``;

export const TextWrapper = styled.View`
	align-items: center;
`;

export const Title = styled.Text`
	font-size: ${RFValue(18)}px;
	font-family: ${({ theme }) => theme.fonts.bold};
	color: ${({ theme }) => theme.colors.TEXT};
	margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
	font-size: ${RFValue(15)}px;
	font-family: ${({ theme }) => theme.fonts.regular};
	color: ${({ theme }) => theme.colors.TEXT};
`;
