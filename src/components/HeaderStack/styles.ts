import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { VectorIcon } from "../VectorIcon";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
`;
export const Content = styled.View`
	flex-direction: row;
	flex: 1;
    justify-content: center;
`;

export const Divider = styled.View`
	height: 0;
	border: 0.5px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	margin: 15px 0;
`;

export const InfoButton = styled(VectorIcon)`
	font-size: ${RFValue(15)}px;
	color: ${({ theme }) => theme.colors.BLUE};
	margin-left: ${RFValue(3)}px;
`;

export const ReturnButton = styled(VectorIcon)`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.PRIMARY};
	margin-left: ${RFValue(3)}px;
`;
