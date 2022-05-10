import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "../../components/Forms/Button";
import { IconButton } from "../../components/Forms/IconButton";
import { InputForm } from "../../components/Forms/InputForm";
import { InputMultiLineForm } from "../../components/Forms/InputMultiLineForm";
import { Title } from "../../components/Text/Title";
import * as ImagePicker from "expo-image-picker";
import {
	ButtonMoreFields,
	Container,
	Divider,
	Form,
	Header,
	IconButtonMoreFields,
	ImageBookWrapper,
	ImageBookEmpty,
	InfoButton,
	InputsFormArea,
	InputsFormAreaHidden,
	OptionSelector,
	OptionSelectorButton,
	OptionSelectorIconButton,
	Spacer,
	TextButtonMoreFields,
	ImageBook,
} from "./styles";

interface FormData {
	title: string;
	author: string;
	publisher?: string;
	description?: string;
	image?: string;
}

const formSchema = yup.object({
	title: yup.string().required("Título é obrigatório."),
	author: yup.string().required("Autor é obrigatório."),
	publisher: yup.string(),
	description: yup.string(),
});

export function InsertBook() {
	const [showInputsFormAreaHidden, setShowInputsFormAreaHidden] = useState(false);

	const {
		watch,
		control,
		handleSubmit,
		resetField,
		setValue,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(formSchema), defaultValues: { title: "" } });

	const handleAddBook: SubmitHandler<FormData> = async values => {
		try {
			console.log(values);
		} catch (error) {
			console.log(error);
		}
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		// let result = await ImagePicker.launchImageLibraryAsync({
		// 	mediaTypes: ImagePicker.MediaTypeOptions.All,
		// 	allowsEditing: true,
		// 	aspect: [4, 3],
		// 	quality: 1,

		// });

		let result = await ImagePicker.launchCameraAsync();

		if (!result.cancelled) {
			setValue("image", result.uri);
		} else {
			setValue("image", "");
		}
		console.log(result);
	};

	useEffect(() => {
		resetField("description");
	}, [showInputsFormAreaHidden]);

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
				<IconButton onPress={pickImage}>
					<ImageBookWrapper isEmpty={!watch("image")}>
						{watch("image")?.length ? (
							<ImageBook
								source={{
									uri: watch("image"),
								}}
							/>
						) : (
							<ImageBookEmpty />
						)}
					</ImageBookWrapper>
				</IconButton>

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
