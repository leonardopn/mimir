import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Text`
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.TEXT};
`;
