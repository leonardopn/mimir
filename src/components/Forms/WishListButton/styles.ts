import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { VectorIcon } from "../../VectorIcon";
import { WrapperIconButton } from "../WrapperIconButton";

interface ContainerProps {
	addWishList: boolean;
}

export const Container = styled(WrapperIconButton)``;
export const Icon = styled(VectorIcon)<ContainerProps>`
	color: ${({ theme, addWishList }) =>
		addWishList ? theme.colors.SECONDARY : theme.colors.WHITE};

	font-size: ${RFValue(30)}px;
`;
