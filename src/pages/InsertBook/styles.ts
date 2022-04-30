import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Foundation from "react-native-vector-icons/Foundation";

export const Container = styled.View`
	padding: ${RFValue(20)}px ${RFValue(25)}px;
`;
export const Header = styled.View`
	flex-direction: row;
`;

export const InfoButton = styled(Foundation).attrs({ name: "info" })`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.BLUE};
	margin-left: ${RFValue(3)}px;
`;

export const OptionSelector = styled.View``;

export const InputForm = styled.View``;

export const ButtonArea = styled.View``;

export const Divider = styled.View`
	height: 0;
	border: 0.5px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	margin: ${RFValue(15)}px 0;
`;
