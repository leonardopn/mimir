import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { useConfigs } from "../../../hooks/store/useConfigs";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { Container, Content, SelectButton } from "./styles";

interface SearchBookInformationProps
	extends StackScreenProps<AppStackRoutesParams, "Book-search-information"> {}

export function SearchBookInformation({ route, navigation }: SearchBookInformationProps) {
	const { book } = route.params;
	const {
		functions: { updateConfigs },
	} = useConfigs();

	useEffect(() => {
		updateConfigs({ showTopNavbar: false });
		return () => updateConfigs({ showTopNavbar: true });
	}, [updateConfigs]);

	function handleSelectBook() {
		navigation.navigate("insertBook-stepTwo");
	}

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Content>
				<BookInformation book={book} />
			</Content>
			<SelectButton title="Selecionar Livro" onPress={handleSelectBook} />
		</Container>
	);
}
