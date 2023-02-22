import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Button } from "../../../components/Forms/Button";
import { SquareSelectOptionForm } from "../../../components/Forms/SquareSelectOptionForm";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { InsertBookContainerDefault } from "../styles";
import { ButtonWrapper, Content, SubTitle, TextWrapper, Title } from "./styles";

interface StepTwoProps extends StackScreenProps<AppStackRoutesParams, "insertBook-stepTwo"> {}

export function StepTwo({ navigation, route }: StepTwoProps) {
	const {
		form: { control, watch, setValue, reset, getValues },
	} = useFormInsertBookContext();

	const book = route.params?.book;

	const isFavorited = watch("isFavorited");
	const isWished = watch("isWished");

	useEffect(() => {
		if (book) {
			const oldValues = getValues();
			reset({ ...oldValues, ...book });
		}
	}, [book, getValues, reset]);

	useEffect(() => {
		if (isFavorited) {
			setValue("isWished", false);
		}
	}, [isFavorited, setValue]);

	useEffect(() => {
		if (isWished) {
			setValue("isFavorited", false);
		}
	}, [isWished, setValue]);

	function handleNext(page: keyof AppStackRoutesParams) {
		navigation.navigate(page);
	}

	return (
		<InsertBookContainerDefault>
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
		</InsertBookContainerDefault>
	);
}
