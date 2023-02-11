import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { FlatList } from "react-native";
import { ButtonSelectStep } from "../../components/ButtonSelectStep";
import { CardBook } from "../../components/CardBook";
import { useBooks } from "../../hooks/store/useBooks";
import { AppStackRoutesParams } from "../../Routes/app.stack.routes";
import {
	Container,
	Header,
	InitialMessageWrapper,
	RecentlyAdded,
	RecentlyAddedHeader,
	SubTitle,
	TextWrapper,
	Title,
} from "./styles";

interface DashboardProps extends StackScreenProps<AppStackRoutesParams, "Dashboard-root"> {}

export function Dashboard({ navigation }: DashboardProps) {
	const { reverseBooks, hasBooks } = useBooks();

	if (!hasBooks)
		return (
			<InitialMessageWrapper>
				<TextWrapper>
					<Title>Nossa, que vazio...</Title>
					<SubTitle>Para começar, adicione um livro clicando no botão abaixo.</SubTitle>
				</TextWrapper>
				<ButtonSelectStep
					onPress={() => navigation.navigate("insertBook-root")}
					icon={{ iconFamily: "ant_design", name: "plussquareo" }}>
					Adicionar Livro
				</ButtonSelectStep>
			</InitialMessageWrapper>
		);

	return (
		<Container>
			<Header>
				{hasBooks && (
					<RecentlyAdded>
						<RecentlyAddedHeader>
							<Title>Adicionados recentemente</Title>
						</RecentlyAddedHeader>
						<FlatList
							data={reverseBooks}
							renderItem={({ item }) => (
								<CardBook
									onPress={() => navigation.navigate("Book-view", { book: item })}
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
				)}
			</Header>
		</Container>
	);
}
