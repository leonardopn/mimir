import { StackScreenProps } from "@react-navigation/stack";
import { CardBook } from "../../../components/CardBook";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { Title } from "../../../components/Text/Title";
import { BookStackParamList } from "../../../Routes/Book/stack.routes";
import {
	Container,
	ContentHeader,
	Content,
	BookInformations,
	MainInfo,
	SimpleInfo,
	BookInformationWrapper,
} from "./styles";

interface BookViewProps extends StackScreenProps<BookStackParamList, "Book-view"> {}

export function BookView({ route }: BookViewProps) {
	const { book } = route.params;

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Content>
				<ContentHeader>
					<Title>{book.title}</Title>
					<CardBook imageUrl={book.image} />
				</ContentHeader>
				<BookInformations>
					<BookInformationWrapper>
						<MainInfo>
							Autor: <SimpleInfo>{book.author}</SimpleInfo>
						</MainInfo>
					</BookInformationWrapper>
					<BookInformationWrapper>
						<MainInfo>
							Editora: <SimpleInfo>{book.publisher}</SimpleInfo>
						</MainInfo>
					</BookInformationWrapper>
					<Spacer spacing={5} />
					<BookInformationWrapper>
						<MainInfo>
							Descrição:{" "}
							<SimpleInfo>
								{book.description ? book.description : "Sem descrição"}
							</SimpleInfo>
						</MainInfo>
					</BookInformationWrapper>
				</BookInformations>
			</Content>
		</Container>
	);
}
