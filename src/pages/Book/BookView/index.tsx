import { StackScreenProps } from "@react-navigation/stack";
import { CardBook } from "../../../components/CardBook";
import { HeaderStack } from "../../../components/HeaderStack";
import { Title } from "../../../components/Text/Title";
import { BookStackParamList } from "../../../Routes/Book/stack.routes";
import { Container, Header } from "./styles";

interface BookViewProps extends StackScreenProps<BookStackParamList, "Book-view"> {}

export function BookView({ route }: BookViewProps) {
	const { book } = route.params;

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Header>
				<Title>{book.title}</Title>
				<CardBook imageUrl={book.image} />
			</Header>
		</Container>
	);
}
