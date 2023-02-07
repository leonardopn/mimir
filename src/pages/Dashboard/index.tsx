import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { FlatList } from "react-native";
import { ButtonSelectStep } from "../../components/ButtonSelectStep";
import { CardBook } from "../../components/CardBook";
import { useBooks } from "../../hooks/store/useBooks";
import { RootBottomTabParamList } from "../../Routes/app.routes";
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

interface DashboardProps extends BottomTabScreenProps<RootBottomTabParamList, "Adicionar"> {}

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
					onPress={() => navigation.navigate("Adicionar")}
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
