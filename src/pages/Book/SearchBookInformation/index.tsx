import { StackScreenProps } from "@react-navigation/stack";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { Container, Content, SelectButton } from "./styles";

interface SearchBookInformationProps
	extends StackScreenProps<AppStackRoutesParams, "Book-search-information"> {}

export function SearchBookInformation({ route }: SearchBookInformationProps) {
	const { book } = route.params;

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Content>
				<BookInformation book={book} />
			</Content>
			<SelectButton title="Selecionar Livro" />
		</Container>
	);
}
