import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { addBook } from "../../../store/slices/books.slice";
import { Book } from "../../../types/Books";
import { uuidv4 } from "../../../utils/uuid";
import { InsertBookContainerDefault } from "../styles";
import { ImageArea } from "./ImageArea";
import { Content, SubTitle, TextWrapper, Title } from "./styles";

interface StepFourProps extends StackScreenProps<AppStackRoutesParams, "insertBook-stepFour"> {}

export function StepFour({ navigation }: StepFourProps) {
	const {
		defaultValues,
		form: { handleSubmit, reset },
	} = useFormInsertBookContext();

	const dispatch = useAppDispatch();

	const onSubmit = handleSubmit(data => {
		const bookToAdd: Book = {
			id: uuidv4(),
			...data,
		};
		dispatch(addBook(bookToAdd));
		reset(defaultValues, { keepValues: false });
		navigation.navigate("insertBook-stepOne");
	});

	return (
		<InsertBookContainerDefault>
			<HeaderStack title="Cadastro de livro" showGoBack />
			<Content>
				<TextWrapper>
					<Title>Quer adicionar uma{"\n"}capa para seu livro?</Title>
					<SubTitle>
						Se desejar, tire uma foto ou{"\n"}escolha uma de sua galeria.
					</SubTitle>
				</TextWrapper>
				<ImageArea />
			</Content>
			<Spacer spacing={10} />
			<Button title="Continuar" onPress={onSubmit} />
		</InsertBookContainerDefault>
	);
}
