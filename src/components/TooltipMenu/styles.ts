import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components";
import { VectorIcon } from "../VectorIcon";

export const OptionsButton = styled(VectorIcon)`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.PRIMARY};
	margin-left: ${RFValue(3)}px;
`;
