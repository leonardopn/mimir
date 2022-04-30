import React from "react";
import { FlatList } from "react-native";
import { CardBook } from "../../components/CardBook";
import { books } from "../../db/db";
import { Container, Header, RecentlyAdded, RecentlyAddedHeader, Title } from "./styles";

interface DashboardProps {}

export function Dashboard({}: DashboardProps) {
	return (
		<Container>
			<Header>
				<RecentlyAdded>
					<RecentlyAddedHeader>
						<Title>Adicionados recentemente</Title>
					</RecentlyAddedHeader>
					<FlatList
						data={books}
						renderItem={({ item }) => (
							<CardBook
								title={item.title}
								author={item.author}
								imageUrl={item.image}
							/>
						)}
						keyExtractor={item => String(item.key)}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
				</RecentlyAdded>
			</Header>
		</Container>
	);
}
