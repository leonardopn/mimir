import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { VectorIcon } from "../VectorIcon";

export const Container = styled.TouchableOpacity<{ color?: string }>`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 45px;
	padding: 0px 10px;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.WHITE};
	background-color: ${({ theme, color }) => (color ? color : theme.colors.PRIMARY)};
`;

export const Icon = styled(VectorIcon)`
	color: ${({ theme }) => theme.colors.WHITE};
	font-size: ${RFValue(25)}px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.colors.WHITE};
	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ArrowIcon = styled(VectorIcon)`
	color: ${({ theme }) => theme.colors.WHITE};
	font-size: ${RFValue(25)}px;
`;
