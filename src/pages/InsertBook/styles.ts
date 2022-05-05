import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { IconButton } from "../../components/Forms/IconButton";
import { VectorIcon } from "../../components/VectorIcon";

export const Container = styled.View`
	padding: ${RFValue(20)}px ${RFValue(25)}px;
	flex: 1;
`;
export const Header = styled.View`
	flex-direction: row;
`;

export const InfoButton = styled(VectorIcon)`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.BLUE};
	margin-left: ${RFValue(3)}px;
`;

export const OptionSelector = styled.View`
	flex-direction: row;
	justify-content: center;
	justify-content: space-around;
`;

export const OptionSelectorButton = styled(IconButton)<{ variant?: "csv" | "default" }>`
	background-color: ${({ theme, variant }) =>
		variant === "csv" ? theme.colors.SUCCESS : theme.colors.TERTIARY};
	padding: ${RFValue(10)}px;
	width: ${RFValue(45)}px;
	height: ${RFValue(45)}px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
`;

export const OptionSelectorIconButton = styled(VectorIcon)`
	font-size: ${RFValue(25)}px;
	color: ${({ theme }) => theme.colors.WHITE};
`;

export const InputForm = styled.ScrollView`
	flex: 1;
`;

export const Divider = styled.View`
	height: 0;
	border: 0.5px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	margin: 15px 0;
`;
