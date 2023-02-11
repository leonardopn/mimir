import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
	padding: 20px;
	height: 100%;
`;

export const Content = styled.ScrollView.attrs({
	contentContainerStyle: { flexGrow: 1, justifyContent: "center" },
})``;

export const TextWrapper = styled.View`
	margin-bottom: ${RFValue(30)}px;
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

export const NormalText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(11)}px;
	color: ${({ theme }) => theme.colors.TEXT};
	text-align: center;
`;

export const InputWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;
