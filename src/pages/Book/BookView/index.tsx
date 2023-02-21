import { StackScreenProps } from "@react-navigation/stack";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { Container, Content } from "./styles";

interface BookViewProps extends StackScreenProps<AppStackRoutesParams, "Book-view"> {}

export function BookView({ route }: BookViewProps) {
	const { book } = route.params;

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Content>
				<BookInformation book={book} />
			</Content>
		</Container>
	);
}
