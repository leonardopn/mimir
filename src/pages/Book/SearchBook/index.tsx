import { StackScreenProps } from "@react-navigation/stack";
import { useCallback, useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";
import { useTheme } from "styled-components/native";
import { ButtonSelectStep } from "../../../components/ButtonSelectStep";
import { IconButton } from "../../../components/Forms/IconButton";
import Input from "../../../components/Forms/Input";
import { HeaderStack } from "../../../components/HeaderStack";
import { Spacer } from "../../../components/Spacer";
import { useBarCodeScanner } from "../../../hooks/useBarCodeScanner";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";

import {
	Container,
	Content,
	InputWrapper,
	NormalText,
	SubTitle,
	TextWrapper,
	Title,
} from "./styles";

interface SearchBookProps extends StackScreenProps<AppStackRoutesParams, "Book-search"> {}

export function SearchBook({ navigation }: SearchBookProps) {
	const theme = useTheme();
	const { result, clear } = useBarCodeScanner();

	const [search, setSearch] = useState("");

	function handleSearchNavigate() {
		if (search) {
			navigation.navigate("Book-search-result", { search });
		} else {
			alert("Preencha o campo de busca");
		}
	}

	const handleSearchNavigateByScan = useCallback(
		(data: string) => {
			if (data) {
				navigation.pop();
				navigation.navigate("Book-search-result", { search: `+isbn:${data}` });
			} else {
				alert("Preencha o campo de busca");
			}
		},
		[navigation]
	);

	useEffect(() => {
		if (result) {
			handleSearchNavigateByScan(result);
			clear();
		}
	}, [clear, handleSearchNavigateByScan, result]);

	return (
		<KeyboardAvoidingView>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
							<Input
								style={{ flex: 1 }}
								placeholder="ISBN, título, autor..."
								value={search}
								onChangeText={value => setSearch(value)}
							/>
							<Spacer spacing={5} />
							<IconButton
								icon={{ iconFamily: "font_awesome", name: "search" }}
								color={theme.colors.TERTIARY}
								iconColor={theme.colors.SECONDARY}
								onPress={handleSearchNavigate}
							/>
						</InputWrapper>
						<Spacer spacing={7.5} />
						<NormalText>OU</NormalText>
						<Spacer spacing={7.5} />
						<ButtonSelectStep
							onPress={() => navigation.navigate("Book-search-barcode")}
							icon={{ iconFamily: "material_community", name: "barcode-scan" }}>
							Escanear código de barras
						</ButtonSelectStep>
					</Content>
				</Container>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
