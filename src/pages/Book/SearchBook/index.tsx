import { useTheme } from "styled-components/native";
import { ButtonSelectStep } from "../../../components/ButtonSelectStep";
import { IconButton } from "../../../components/Forms/IconButton";
import Input from "../../../components/Forms/Input";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { Container, Content, InputWrapper, SubTitle, TextWrapper, Title } from "./styles";

interface SearchBookProps {}

export function SearchBook({}: SearchBookProps) {
	const theme = useTheme();

	return (
		<Container>
			<HeaderStack title="Cadastro de livro" showGoBack />
			<Content>
				<TextWrapper>
					<Title>Como deseja buscar seus dados?</Title>
					<SubTitle>
						Você pode buscar por título, isbn ou escaneando o código de barras.
					</SubTitle>
				</TextWrapper>

				<InputWrapper>
					<Input style={{ flex: 1 }} placeholder="ISBN, título, autor..." />
					<Spacer spacing={5} />
					<IconButton
						icon={{ iconFamily: "font_awesome", name: "search" }}
						color={theme.colors.TERTIARY}
						iconColor={theme.colors.SECONDARY}
					/>
				</InputWrapper>
				<Spacer spacing={7.5} />
				<Title>OU</Title>
				<Spacer spacing={7.5} />
				<ButtonSelectStep
					onPress={() => console.log("")}
					icon={{ iconFamily: "material_community", name: "barcode-scan" }}>
					Escanear código de barras
				</ButtonSelectStep>
			</Content>
		</Container>
	);
}
