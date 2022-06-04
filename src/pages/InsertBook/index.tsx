import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../components/Forms/Button";
import { InputForm } from "../../components/Forms/InputForm";
import { InputMultiLineForm } from "../../components/Forms/InputMultiLineForm";
import { WrapperIconButton } from "../../components/Forms/WrapperIconButton";
import { Title } from "../../components/Text/Title";
import { useControllerContext } from "../../context/Form.context";
import { ImageArea } from "./ImageArea";
import {
	ButtonMoreFields,
	Container,
	Divider,
	Form,
	Header,
	IconButtonMoreFields,
	InfoButton,
	InputsFormArea,
	InputsFormAreaHidden,
	OptionSelector,
	OptionSelectorButton,
	OptionSelectorIconButton,
	Spacer,
	TextButtonMoreFields,
} from "./styles";

interface FormData {
	title: string;
	author: string;
	isFavorited: boolean;
	addInWishList: boolean;
	publisher?: string;
	description?: string;
	image?: string;
}

const formSchema = yup.object({
	title: yup.string().required("Título é obrigatório."),
	author: yup.string().required("Autor é obrigatório."),
	isFavorited: yup.boolean(),
	addInWishList: yup.boolean(),
	publisher: yup.string(),
	description: yup.string(),
});

export function InsertBook() {
	const [showInputsFormAreaHidden, setShowInputsFormAreaHidden] = useState(false);
	const { setForm } = useControllerContext();

	const form = useForm<FormData>({
		resolver: yupResolver(formSchema),
		defaultValues: { title: "", author: "", isFavorited: false, addInWishList: false },
	});

	const {
		control,
		handleSubmit,
		resetField,
		formState: { errors },
	} = form;

	const handleAddBook: SubmitHandler<FormData> = async values => {
		try {
			console.log(values);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setForm(form);
		return () => {
			setForm(undefined);
		};
	}, [form]);

	useEffect(() => {
		resetField("description");
	}, [showInputsFormAreaHidden]);

	return (
		<Container>
			<Header>
				<Title>Cadastrar um novo livro</Title>
				<WrapperIconButton>
					<InfoButton iconFamily="foundation" name="info" />
				</WrapperIconButton>
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
				<ImageArea control={control} name="image" />
				<InputsFormArea>
					<InputForm
						label="Título *"
						control={control}
						error={errors.title}
						name="title"
						placeholder="Harry Potter"
					/>
					<Spacer />
					<InputForm
						label="Autor *"
						control={control}
						error={errors.author}
						name="author"
						placeholder="J.K. Rowling"
					/>
					<Spacer />
					<InputForm
						label="Editora"
						control={control}
						error={errors.publisher}
						name="publisher"
						placeholder="Rocco"
					/>
					<Spacer />
					<ButtonMoreFields
						onPress={() => setShowInputsFormAreaHidden(!showInputsFormAreaHidden)}>
						<IconButtonMoreFields
							name={showInputsFormAreaHidden ? "minussquare" : "plussquare"}
						/>
						<TextButtonMoreFields>
							{showInputsFormAreaHidden ? "Menos campos" : "Mais campos"}
						</TextButtonMoreFields>
					</ButtonMoreFields>
					{showInputsFormAreaHidden && (
						<>
							<Spacer />
							<InputsFormAreaHidden>
								<InputMultiLineForm
									label="Descrição"
									control={control}
									error={errors.description}
									name="description"
									placeholder="Descrição do livro..."
								/>
							</InputsFormAreaHidden>
						</>
					)}
				</InputsFormArea>
				<Divider />
				<Button title="Salvar" onPress={handleSubmit(handleAddBook)} />
			</Form>
		</Container>
	);
}
