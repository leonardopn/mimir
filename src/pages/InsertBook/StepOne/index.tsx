import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useTheme } from "styled-components";
import { ButtonSelectStep } from "../../../components/ButtonSelectStep";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { InsertBookContainerDefault } from "../styles";
import { ButtonWrapper, Content, SubTitle, TextWrapper, Title } from "./styles";

interface StepOneProps extends StackScreenProps<AppStackRoutesParams, "insertBook-stepOne"> {}

export function StepOne({ navigation }: StepOneProps) {
	const theme = useTheme();

	function handleNext(page: keyof AppStackRoutesParams) {
		navigation.navigate(page);
	}

	return (
		<InsertBookContainerDefault>
			<HeaderStack title="Cadastro de livro" />
			<Content>
				<TextWrapper>
					<Title>Olá, vamos adicionar um livro?</Title>
					<SubTitle>
						Para começar, escolha o método que preferir para adição de um ou mais
						livros.
					</SubTitle>
				</TextWrapper>
				<ButtonWrapper>
					<ButtonSelectStep
						onPress={() => handleNext("insertBook-stepTwo")}
						icon={{ iconFamily: "entypo", name: "keyboard" }}>
						Adicionar dados manualmente
					</ButtonSelectStep>
					<Spacer spacing={7.5} />
					<ButtonSelectStep
						icon={{ iconFamily: "font_awesome", name: "search" }}
						onPress={() => handleNext("Book-search")}>
						Procurar na base de dados
					</ButtonSelectStep>
					<Spacer spacing={7.5} />
					<ButtonSelectStep
						icon={{ iconFamily: "font_awesome_5", name: "file-csv" }}
						color={theme.colors.SUCCESS}>
						Importar livros de um arquivo CSV
					</ButtonSelectStep>
				</ButtonWrapper>
			</Content>
		</InsertBookContainerDefault>
	);
}
