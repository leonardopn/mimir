import React from "react";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { SquareSelectOption } from "../../../components/SquareSelectOption";
import { ButtonWrapper, Container, Content, SubTitle, TextWrapper, Title } from "./styles";

export function StepTwo() {
	return (
		<Container>
			<HeaderStack title="Cadastro de livro" showGoBack />
			<Content>
				<TextWrapper>
					<Title>Onde devo adicionar seu livro?</Title>
					<SubTitle>
						Se desejar, adicione seu livro na lista de desejos ou favoritos.
					</SubTitle>
				</TextWrapper>
				<ButtonWrapper>
					<SquareSelectOption icon={{ iconFamily: "ant_design", name: "star" }}>
						Favoritos
					</SquareSelectOption>
					<Spacer spacing={7.5} />
					<SquareSelectOption icon={{ iconFamily: "ant_design", name: "heart" }}>
						Lista de desejos
					</SquareSelectOption>
				</ButtonWrapper>
				<Spacer spacing={15} />
				<Button title="Continuar" />
			</Content>
		</Container>
	);
}
