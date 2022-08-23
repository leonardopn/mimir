import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { VectorIcon } from "../VectorIcon";

export const Container = styled.TouchableOpacity<{ color?: string }>`
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
	width: 95px;
	height: 85px;
	
	color: ${({ theme }) => theme.colors.WHITE};
	background-color: ${({ theme, color }) => (color ? color : theme.colors.PRIMARY)};
`;

export const Icon = styled(VectorIcon)`
	color: ${({ theme }) => theme.colors.WHITE};
	font-size: ${RFValue(20)}px;
`;

export const Text = styled.Text`
	color: ${({ theme }) => theme.colors.WHITE};
	font-size: ${RFValue(12)}px;
	font-family: ${({ theme }) => theme.fonts.medium};
	font-weight: 600;
`;
