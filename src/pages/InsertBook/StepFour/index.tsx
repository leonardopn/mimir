import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { RootStackParamList } from "../../../Routes/insertBook/stack.routes";
import { Container, Content } from "./styles";

interface StepFourProps extends StackScreenProps<RootStackParamList, "insertBook-stepFour"> {}

export function StepFour({ navigation }: StepFourProps) {
	const {
		form: { control },
	} = useFormInsertBookContext();

	function handleNext() {
		navigation.navigate("insertBook-stepTwo");
	}

	return (
		<Container>
			<HeaderStack title="Cadastro de livro" showGoBack />
			<Content />
			<Spacer spacing={10} />
			<Button title="Continuar" onPress={handleNext} />
		</Container>
	);
}
