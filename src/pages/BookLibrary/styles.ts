import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { CardBook } from "../../components/CardBook";

export const Container = styled.View`
	padding: ${RFValue(25)}px;
	flex: 1;
`;

export const Content = styled.View`
	flex: 1;
`;

export const BookThumb = styled(CardBook)<{ $isEven: boolean }>`
	margin-bottom: ${RFValue(10)}px;
	${({ $isEven }) =>
		!$isEven &&
		css`
			margin-left: ${RFValue(10)}px;
		`}
`;
