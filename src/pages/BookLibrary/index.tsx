import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { EmptyLibrary } from "../../components/EmptyLibrary";
import { HeaderStack } from "../../components/HeaderStack";
import { useBooks } from "../../hooks/store/useBooks";
import { isEven } from "../../utils/math";
import { BookThumb, Container, Content } from "./styles";

export function BookLibrary() {
	const { reverseBooks } = useBooks();
	const { navigate } = useNavigation();

	return (
		<Container>
			<HeaderStack title="Biblioteca" />
			<Content>
				<FlatList
					data={reverseBooks}
					renderItem={({ item, index }) => (
						<BookThumb
							onPress={() => navigate("Book-view", { book: item })}
							title={item.title}
							author={item.author}
							imageUrl={item.image || ""}
							size="medium"
							$isEven={isEven(index)}
						/>
					)}
					numColumns={2}
					ListEmptyComponent={<EmptyLibrary />}
					keyExtractor={item => String(item.id)}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				/>
			</Content>
		</Container>
	);
}
