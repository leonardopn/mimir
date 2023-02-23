import { Book } from "../../types/Books";
import { CardBook } from "../CardBook";
import { Spacer } from "../Spacer";
import {
	BookInformations,
	BookInformationWrapper,
	BookTitle,
	Container,
	ContentHeader,
	MainInfo,
	SimpleInfo,
} from "./styles";

interface BookInformationProps {
	book: Book;
}

export function BookInformation({ book }: BookInformationProps) {
	return (
		<Container>
			<ContentHeader>
				<BookTitle>{book.title}</BookTitle>
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
						ISBN-10: <SimpleInfo>{book.isbn10 || "Sem ISBN-10"}</SimpleInfo>
					</MainInfo>
				</BookInformationWrapper>
				<BookInformationWrapper>
					<MainInfo>
						ISBN-13: <SimpleInfo>{book.isbn13 || "Sem ISBN-13"}</SimpleInfo>
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
		</Container>
	);
}
