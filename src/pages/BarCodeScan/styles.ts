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
