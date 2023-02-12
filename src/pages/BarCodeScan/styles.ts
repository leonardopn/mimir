import styled from "styled-components/native";
import { Button } from "../../components/Forms/Button";
import { Subtitle } from "../../components/Text/Subtitle";
import { Title } from "../../components/Text/Title";

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
	justify-content: center;
	align-items: center;
	flex: 1;
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
	width: 100%;
	height: 100%;
	position: relative;
	flex-direction: row;

	align-items: center;
`;

export const BarCodeInformationWrapper = styled.View`
	background-color: grey;
	padding: 10px;
	border-radius: 10px;
	flex-direction: row;
	height: 500px;
	width: 60px;

	/* bottom: 0px;
	right: 100px;
	transform: rotate(90deg);
	position: absolute; */
`;

export const ContrastTitle = styled(Title)`
	color: white;
	/* transform: rotate(90deg); */
	width: 50px;
	height: 500px;
`;
