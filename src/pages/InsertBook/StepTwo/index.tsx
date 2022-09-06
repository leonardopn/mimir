import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Button } from "../../../components/Forms/Button";
import { SquareSelectOptionForm } from "../../../components/Forms/SquareSelectOptionForm";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { RootStackParamList } from "../../../Routes/insertBook/stack.routes";
import { ButtonWrapper, Container, Content, SubTitle, TextWrapper, Title } from "./styles";

interface StepTwoProps extends StackScreenProps<RootStackParamList, "insertBook-stepTwo"> {}

export function StepTwo({ navigation }: StepTwoProps) {
	const {
		form: { control, watch, setValue },
	} = useFormInsertBookContext();

	const isFavorited = watch("isFavorited");
	const isWished = watch("isWished");

	useEffect(() => {
		if (isFavorited) {
			setValue("isWished", false);
		}
	}, [isFavorited]);

	useEffect(() => {
		if (isWished) {
			setValue("isFavorited", false);
		}
	}, [isWished]);

	function handleNext(page: keyof RootStackParamList) {
		navigation.navigate(page);
	}

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
					<SquareSelectOptionForm
						control={control}
						name="isFavorited"
						icon={{ iconFamily: "ant_design", name: "star" }}>
						Favoritos
					</SquareSelectOptionForm>
					<Spacer spacing={7.5} />
					<SquareSelectOptionForm
						control={control}
						name="isWished"
						icon={{ iconFamily: "ant_design", name: "heart" }}>
						Lista de desejos
					</SquareSelectOptionForm>
				</ButtonWrapper>
				<Spacer spacing={15} />
				<Button title="Continuar" onPress={() => handleNext("insertBook-stepThree")} />
			</Content>
		</Container>
	);
}
