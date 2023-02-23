import { useNavigation } from "@react-navigation/native";
import { ButtonSelectStep } from "../ButtonSelectStep";
import { Container, SubTitle, TextWrapper, Title } from "./styles";

export function EmptyLibrary() {
	const { navigate } = useNavigation();

	return (
		<Container>
			<TextWrapper>
				<Title>Nossa, que vazio...</Title>
				<SubTitle>Para começar, adicione um livro clicando no botão abaixo.</SubTitle>
			</TextWrapper>
			<ButtonSelectStep
				onPress={() => navigate("Adicionar", { defaultRoute: "insertBook-stepOne" })}
				icon={{ iconFamily: "ant_design", name: "plussquareo" }}>
				Adicionar Livro
			</ButtonSelectStep>
		</Container>
	);
}
