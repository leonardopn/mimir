import { StackScreenProps } from "@react-navigation/stack";
import { isAxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { CardBookHorizontal } from "../../../components/CardBookHorizontal";
import { HeaderStack } from "../../../components/HeaderStack";
import { InsertBookStackParamList } from "../../../Routes/insertBook/stack.routes";
import { GetGoogleBooksApi, googleBooksApi } from "../../../services/googleBooksApi";
import { Container, Content } from "./styles";

interface SearchBookResultProps
	extends StackScreenProps<InsertBookStackParamList, "Book-search-result"> {}

export function SearchBookResult({ route }: SearchBookResultProps) {
	const [apiReturn, setApiReturn] = useState<GetGoogleBooksApi | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const { search } = route.params;

	const searchBook = useCallback(async () => {
		try {
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

	if (isLoading) return <ActivityIndicator />;
	if (error)
		return (
			<Container>
				<Text>Erro ao buscar o livro</Text>
			</Container>
		);

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} title="Cadastro de livro" />
			<Content>
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
						title: volumeInfo?.title,
						author: authors[0],
						publisher: volumeInfo?.publisher,
						isbn10: isbn10,
						isbn13: isbn13,
						description: volumeInfo?.description,
						image: volumeInfo?.imageLinks?.thumbnail,
					};

					return <CardBookHorizontal key={id} data={data} />;
				})}
			</Content>
		</Container>
	);
}
