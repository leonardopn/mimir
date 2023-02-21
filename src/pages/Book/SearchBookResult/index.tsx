import { StackScreenProps } from "@react-navigation/stack";
import { isAxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { CardBookHorizontal } from "../../../components/CardBookHorizontal";
import { HeaderStack } from "../../../components/HeaderStack";
import { Loading } from "../../../components/Loading";
import { Subtitle } from "../../../components/Text/Subtitle";
import { Title } from "../../../components/Text/Title";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import {
	GetGoogleBooksApi,
	googleBooksApi,
	IGoogleBooksApi,
} from "../../../services/googleBooksApi";
import { transformIGoogleBooksApiToBook } from "../../../utils/book";
import { ErrorPage } from "../../ErrorPage";
import { Container, Content, TextHeader } from "./styles";

interface SearchBookResultProps
	extends StackScreenProps<AppStackRoutesParams, "Book-search-result"> {}

export function SearchBookResult({ route, navigation }: SearchBookResultProps) {
	const [apiReturn, setApiReturn] = useState<GetGoogleBooksApi | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const { search } = route.params;

	function selectBook(data: IGoogleBooksApi) {
		navigation.navigate("Book-search-information", {
			book: transformIGoogleBooksApiToBook(data),
		});
	}
	const searchBook = useCallback(async () => {
		try {
			setIsLoading(true);
			const { data } = await googleBooksApi.get<GetGoogleBooksApi>("/", {
				params: { q: search, maxResults: 40 },
			});

			setApiReturn(data);
		} catch (err) {
			if (isAxiosError(err)) {
				console.error(err.response?.data);
			}

			setError(true);
		} finally {
			setIsLoading(false);
		}
	}, [search]);

	useEffect(() => {
		searchBook();
	}, [searchBook]);

	if (isLoading) return <Loading text="Buscando dados..." />;

	if (error) return <ErrorPage showHeader title="Cadastro de livro" onTryAgain={searchBook} />;

	return (
		<Container>
			<HeaderStack showGoBack title="Cadastro de livro" />
			<Content>
				<TextHeader>
					<Title>Livros encontrados</Title>
					<Subtitle style={{ textAlign: "center" }}>
						Abaixo estão todos os livros que correspondem a sua busca.
					</Subtitle>
				</TextHeader>
				{apiReturn?.items?.map(item => {
					const { id, volumeInfo } = item;
					const industryIdentifiers = volumeInfo.industryIdentifiers;
					const isbn10 =
						industryIdentifiers?.find(identifier => identifier.type === "ISBN_10")
							?.identifier || "";
					const isbn13 =
						industryIdentifiers?.find(identifier => identifier.type === "ISBN_13")
							?.identifier || "";
					const authors = volumeInfo?.authors || [];

					const data = {
						id,
						title: volumeInfo?.title,
						author: authors[0],
						publisher: volumeInfo?.publisher,
						isbn10: isbn10,
						isbn13: isbn13,
						description: volumeInfo?.description,
						image: volumeInfo?.imageLinks?.thumbnail,
					};

					return (
						<CardBookHorizontal
							data={data}
							key={item.id}
							onPress={() => selectBook(item)}
						/>
					);
				})}
			</Content>
		</Container>
	);
}
