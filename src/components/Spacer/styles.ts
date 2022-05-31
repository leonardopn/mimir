import styled from "styled-components/native";
import { SpacerProps } from ".";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View<SpacerProps>`
	margin: ${({ spacing }) => RFValue(spacing!)}px;
`;
