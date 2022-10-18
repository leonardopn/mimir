import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { InputForm } from "../../../components/Forms/InputForm";
import { InputMultiLineForm } from "../../../components/Forms/InputMultiLineForm";

export const Container = styled.View`
	height: 100%;
`;

export const Content = styled.ScrollView``;

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

export const InputWrapper = styled.View``;

export const Input = styled(InputForm)`` as typeof InputForm;

export const InputMultiLine = styled(InputMultiLineForm)`` as typeof InputMultiLineForm;

export const ButtonWrapper = styled.View`
	flex-direction: row;
	justify-content: center;
`;
