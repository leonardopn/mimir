import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { WrapperIconButton } from "../../components/Forms/WrapperIconButton";
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

export const OptionSelectorButton = styled(WrapperIconButton)<{ variant?: "csv" | "default" }>`
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

export const InputsFormArea = styled.View``;

export const Divider = styled.View`
	height: 0;
	border: 0.5px solid ${({ theme }) => theme.colors.TEXT_LIGHT};
	margin: 15px 0;
`;

export const Form = styled.ScrollView.attrs({
	showsVerticalScrollIndicator: false,
})``;

export const Spacer = styled.View`
	height: ${RFValue(10)}px;
	width: 100%;
`;

export const ButtonMoreFields = styled(WrapperIconButton)`
	margin: 10px 0px;
	flex-direction: row;
	align-items: center;
`;

export const IconButtonMoreFields = styled(VectorIcon).attrs({
	iconFamily: "ant_design",
})`
	color: ${({ theme }) => theme.colors.TERTIARY};
	font-size: ${RFValue(18)}px;
`;

export const TextButtonMoreFields = styled.Text`
	margin-left: 5px;
	font-family: ${({ theme }) => theme.fonts.medium};
	color: ${({ theme }) => theme.colors.TERTIARY};
`;

export const InputsFormAreaHidden = styled.View``;

export const Content = styled.View`
	flex: 1;
`;
