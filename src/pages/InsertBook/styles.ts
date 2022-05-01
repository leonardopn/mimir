import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome from "react-native-vector-icons/FontAwesome";

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

export const SearchButton = styled(FontAwesome).attrs({ name: "search" })`
	font-size: ${RFValue(25)}px;
	background-color: ${({ theme }) => theme.colors.TERTIARY};
	color: ${({ theme }) => theme.colors.WHITE};
	padding: ${RFValue(10)}px;
	border-radius: 5px;
`;

export const OptionSelector = styled.View`
	flex-direction: row;
`;

export const InputForm = styled.View``;

export const ButtonArea = styled.View``;

export const Divider = styled.View`
	height: 0;
	border: 0.5px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	margin: ${RFValue(15)}px 0;
`;
