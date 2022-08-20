import React from "react";
import { useTheme } from "styled-components";
import { ButtonSelectStep } from "../../../components/ButtonSelectStep";
import { Spacer } from "../../../components/Spacer";
import { Container, TextWrapper, Title, SubTitle, ButtonWrapper } from "./styles";

export function StepOne() {
	const theme = useTheme();

	return (
		<Container>
			<TextWrapper>
				<Title>Olá, vamos adicionar um livro?</Title>
				<SubTitle>
					Para começar, escolha o método que preferir para adição de um ou mais livros.
				</SubTitle>
			</TextWrapper>
			<ButtonWrapper>
				<ButtonSelectStep icon={{ iconFamily: "entypo", name: "keyboard" }}>
					Adicionar dados manualmente
				</ButtonSelectStep>
				<Spacer spacing={7.5} />
				<ButtonSelectStep icon={{ iconFamily: "font_awesome", name: "search" }}>
					Procurar na base de dados
				</ButtonSelectStep>
				<Spacer spacing={7.5} />
				<ButtonSelectStep
					icon={{ iconFamily: "font_awesome_5", name: "file-csv" }}
					color={theme.colors.SUCCESS}>
					Importar livros de um arquivo CSV
				</ButtonSelectStep>
			</ButtonWrapper>
		</Container>
	);
}
