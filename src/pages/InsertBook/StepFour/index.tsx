import { StackScreenProps } from "@react-navigation/stack";
import { Button } from "../../../components/Forms/Button";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useFormInsertBookContext } from "../../../context/FormInsertBook.context";
import { InsertBookStackParamList } from "../../../Routes/insertBook/stack.routes";
import { Book } from "../../../types/Books";
import { ImageArea } from "./ImageArea";
import { Container, Content, SubTitle, Title, TextWrapper } from "./styles";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { addBook } from "../../../store/slices/books.slice";
import { uuidv4 } from "../../../utils/uuid";

interface StepFourProps extends StackScreenProps<InsertBookStackParamList, "insertBook-stepFour"> {}

export function StepFour({ navigation }: StepFourProps) {
	const {
		form: { handleSubmit, reset },
	} = useFormInsertBookContext();

	const dispatch = useAppDispatch();

	const onSubmit = handleSubmit(data => {
		const bookToAdd: Book = {
			id: uuidv4(),
			...data,
		};
		dispatch(addBook(bookToAdd));
		navigation.navigate("insertBook-stepOne");
		reset();
	});

	return (
		<Container>
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
		</Container>
	);
}
