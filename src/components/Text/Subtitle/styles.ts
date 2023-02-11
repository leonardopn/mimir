import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Text`
	font-family: ${({ theme }) => theme.fonts.regular};
	font-size: ${RFValue(13)}px;
	color: ${({ theme }) => theme.colors.TEXT};
`;
