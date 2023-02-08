import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Color } from "../../../types/Theme";
import { VectorIcon } from "../../VectorIcon";
import { WrapperIconButton } from "../WrapperIconButton";

export const Container = styled(WrapperIconButton)<{ color?: Color | string }>`
	justify-content: center;
	align-items: center;

	background-color: ${({ theme, color }) => color || theme.colors.TERTIARY};

	padding: ${RFValue(10)}px;
	width: ${RFValue(45)}px;
	height: ${RFValue(45)}px;

	border-radius: 5px;
`;

export const Icon = styled(VectorIcon)<{ iconColor: Color | string }>`
	font-size: ${RFValue(25)}px;
	color: ${({ theme, iconColor }) => iconColor || theme.colors.WHITE};
`;
