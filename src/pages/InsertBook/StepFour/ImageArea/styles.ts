import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { VectorIcon } from "../../../../components/VectorIcon";

export const Container = styled.View`
	margin: 30px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

export const ButtonWrapper = styled.View``;

export const ImageBookWrapper = styled.View.attrs(({ theme }) => ({ ...theme.shadow.default }))<{
	isEmpty: boolean;
}>`
	height: ${RFValue(230)}px;
	width: ${RFValue(180)}px;
	background-color: ${({ theme }) => theme.colors.WHITE};
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
