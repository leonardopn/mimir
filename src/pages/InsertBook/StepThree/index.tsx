import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { RootStackParamList } from "../../../Routes/insertBook/stack.routes";
import { Container, Content, Input, InputMultiLine, InputWrapper } from "./styles";

interface StepThreeProps extends StackScreenProps<RootStackParamList, "insertBook-stepThree"> {}

export function StepThree({ navigation }: StepThreeProps) {
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

	function handleNext() {
		navigation.navigate("insertBook-stepFour");
	}

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Container>
					<HeaderStack title="Cadastro de livro" showGoBack />
					<Content>
						<InputWrapper>
							<Input
								control={control}
								name="title"
								label="Título"
								placeholder="Harry Potter"
							/>
							<Spacer spacing={5} />
							<Input
								control={control}
								name="author"
								label="Autor"
								placeholder="J.K. Rowling"
							/>
							<Spacer spacing={5} />
							<Input
								control={control}
								name="publisher"
								label="Editora"
								placeholder="Rocco"
							/>
							<Spacer spacing={5} />
							<InputMultiLine
								control={control}
								name="description"
								label="Descrição"
								placeholder="Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê... "
							/>
						</InputWrapper>
					</Content>
					<Spacer spacing={10} />
					<Button title="Continuar" onPress={handleNext} />
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
