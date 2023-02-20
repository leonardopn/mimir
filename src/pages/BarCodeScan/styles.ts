import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Button } from "../../components/Forms/Button";
import { Subtitle } from "../../components/Text/Subtitle";
import { Title } from "../../components/Text/Title";
import { VectorIcon } from "../../components/VectorIcon";

export const Container = styled.View<{ width: number; height: number }>`
	position: absolute;
	width: ${props => props.width}px;
	height: ${props => props.height}px;
`;

export const Overlay = styled.View`
	flex: 1;
	margin: 20px;
`;

export const OverlayContent = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const MessagePermission = styled(Title)`
	text-align: center;
`;
export const SubMessagePermission = styled(Subtitle)`
	text-align: center;
`;

export const ButtonTryAgain = styled(Button)`
	margin-top: 20px;
	width: 100%;
`;

export const BarCodeContent = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-top: 40px;
	width: 80%;
`;

export const BarCodeInformationWrapper = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	padding: 10px;
	border-radius: 10px;
	margin-left: 30px;
	background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContrastTitle = styled(Title)`
	color: ${({ theme }) => theme.colors.TEXT};
	font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ReturnButton = styled(VectorIcon)`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.WHITE};
	margin-left: ${RFValue(3)}px;
`;
