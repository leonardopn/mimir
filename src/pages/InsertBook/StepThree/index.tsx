import React, { useEffect } from "react";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { Container, Content, Input, InputMultiLine, InputWrapper } from "./styles";

export function StepThree() {
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

	return (
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
					<Input control={control} name="publisher" label="Editora" placeholder="Rocco" />
					<Spacer spacing={5} />
					<InputMultiLine control={control} name="description" label="Descrição" />
				</InputWrapper>

				<Button title="Continuar" />
			</Content>
		</Container>
	);
}
