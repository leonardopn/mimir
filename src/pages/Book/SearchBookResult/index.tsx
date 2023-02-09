import { StackScreenProps } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Text } from "react-native";
import { InsertBookStackParamList } from "../../../Routes/insertBook/stack.routes";
import { GetGoogleBooksApi, googleBooksApi } from "../../../services/googleBooksApi";
import { Container } from "./styles";

interface SearchBookResultProps
	extends StackScreenProps<InsertBookStackParamList, "Book-search-result"> {}

export function SearchBookResult({ route }: SearchBookResultProps) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const { search } = route.params;

	const searchBook = useCallback(async () => {
		try {
			const { data } = await googleBooksApi.get<GetGoogleBooksApi>("/", {
				params: { q: search },
			});

			console.log(data.totalItems);
		} catch (err) {
			console.log(err);
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

	return <Container />;
}
