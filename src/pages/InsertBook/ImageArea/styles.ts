import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { VectorIcon } from "../../../components/VectorIcon";

export const Container = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

export const ButtonArea = styled.View`
	display: flex;
`;

export const ImageBookWrapper = styled.View<{ isEmpty: boolean }>`
	height: ${RFValue(230)}px;
	width: ${RFValue(180)}px;
	background-color: ${({ theme }) => theme.colors.WHITE};
	border: 1px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	align-self: center;
	border-radius: 10px;
	margin-bottom: 10px;
	overflow: hidden;

	${({ isEmpty }) =>
		isEmpty &&
		css`
			justify-content: center;
			align-items: center;
		`}
`;

export const ImageBookEmpty = styled(VectorIcon).attrs({
	iconFamily: "material_community",
	name: "image-search",
})`
	font-size: ${RFValue(50)}px;
	color: ${({ theme }) => theme.colors.TEXT_LIGHT};
`;

export const ImageBook = styled.Image`
	flex: 1;
`;
