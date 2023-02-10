import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View<{ isFullScreen: boolean }>`
	padding: ${RFValue(20)}px ${RFValue(25)}px;
	flex: 1;

	${({ isFullScreen }) =>
		isFullScreen &&
		css`
			padding: 0;
		`}
`;
