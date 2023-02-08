import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	padding: 20px;
`;

export const Header = styled.View``;

export const RecentlyAdded = styled.View``;

export const RecentlyAddedHeader = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

export const TextWrapper = styled.View`
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.TEXT};
`;

export const SubTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: center;
	margin-top: 10px;
`;

export const InitialMessageWrapper = styled.View`
	padding: 20px;
	flex: 1;
	justify-content: center;
`;
