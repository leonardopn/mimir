import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Color } from "../../../types/Theme";

interface ContainerProps {
	variant?: Color;
	autoSize?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
	height: ${RFValue(50)}px;
	background-color: ${({ theme, variant }) => theme.colors[variant || "PRIMARY"]};
	border-radius: 5px;
	justify-content: center;
	align-items: center;

	${({ autoSize }) =>
		autoSize
			? css`
					height: 100%;
			  `
			: ""}
`;

export const TextButton = styled.Text`
	color: ${({ theme }) => theme.colors.WHITE};
	font-family: ${({ theme }) => theme.fonts.bold};
	font-size: ${RFValue(18)}px;
`;
