import styled from "styled-components/native";
import { Button } from "../../components/Forms/Button";
import { Subtitle } from "../../components/Text/Subtitle";
import { Title } from "../../components/Text/Title/index";

export const Container = styled.View`
	flex: 1;
	margin: 20px 25px;
	text-align: center;
`;

export const Content = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const ErrorMessage = styled(Title)`
	text-align: center;
`;

export const ErrorSubMessage = styled(Subtitle)`
	text-align: center;
	margin-top: 5px;
`;

export const ButtonTryAgain = styled(Button)`
	width: 100%;
	margin-top: 30px;
`;
