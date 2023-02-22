import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const InsertBookContainerDefault = styled.View<{ isFullScreen: boolean }>`
	padding: ${RFValue(20)}px;
	flex: 1;

	${({ isFullScreen }) =>
		isFullScreen &&
		css`
			padding: 0;
		`}
`;
