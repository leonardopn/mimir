import React from "react";
import { FlatList } from "react-native";
import { CardBook } from "../../components/CardBook";
import { useAppSelector } from "../../hooks/useAppSelector";
import { Container, Header, RecentlyAdded, RecentlyAddedHeader, Title } from "./styles";

export function Dashboard() {
	const { data: books } = useAppSelector(state => state.books);

	return (
		<Container>
			<Header>
				<RecentlyAdded>
					<RecentlyAddedHeader>
						<Title>Adicionados recentemente</Title>
					</RecentlyAddedHeader>
					<FlatList
						data={books.reverse()}
						renderItem={({ item }) => (
							<CardBook
								title={item.title}
								author={item.author}
								imageUrl={item.image || ""}
							/>
						)}
						keyExtractor={item => String(item.id)}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</RecentlyAdded>
			</Header>
		</Container>
	);
}
