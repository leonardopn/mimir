import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../components/Forms/Button";
import { IconButton } from "../../components/Forms/IconButton";
import { InputForm } from "../../components/Forms/InputForm";
import { Title } from "../../components/Text/Title";
import {
	Container,
	Divider,
	Form,
	Header,
	InfoButton,
	InputsFormArea,
	OptionSelector,
	OptionSelectorButton,
	OptionSelectorIconButton,
	Spacer
} from "./styles";

interface FormData {
	title: string;
}

const formSchema = yup.object({
	title: yup.string().required("Título é obrigatório."),
});

export function InsertBook() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(formSchema), defaultValues: { title: "" } });

	const handleAddBook: SubmitHandler<FormData> = async values => {
		try {
			console.log(values);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<Header>
				<Title>Cadastrar um novo livro</Title>
				<IconButton>
					<InfoButton iconFamily="foundation" name="info" />
				</IconButton>
			</Header>
			<Divider />
			<OptionSelector>
				<OptionSelectorButton>
					<OptionSelectorIconButton iconFamily="font_awesome" name="search" />
				</OptionSelectorButton>
				<OptionSelectorButton>
					<OptionSelectorIconButton iconFamily="material_community" name="barcode-scan" />
				</OptionSelectorButton>
				<OptionSelectorButton variant="csv">
					<OptionSelectorIconButton iconFamily="font_awesome_5" name="file-csv" />
				</OptionSelectorButton>
			</OptionSelector>
			<Divider />
			<Form>
				<InputsFormArea>
					<InputForm
						label="Título"
						control={control}
						error={errors.title}
						name="title"
						placeholder="Harry Potter..."
					/>
					<Spacer />
				</InputsFormArea>
				<Divider />
				<Button title="Salvar" onPress={handleSubmit(handleAddBook)} />
			</Form>
		</Container>
	);
}
