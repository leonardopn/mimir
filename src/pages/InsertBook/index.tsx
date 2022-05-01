import React from "react";
import { IconButton } from "../../components/Forms/IconButton";
import { Title } from "../../components/Text/Title";
import {
	ButtonArea,
	Container,
	Divider,
	Header,
	InfoButton,
	SearchButton,
	InputForm,
	OptionSelector,
} from "./styles";

export function InsertBook() {
	return (
		<Container>
			<Header>
				<Title>Cadastrar um novo livro</Title>
				<IconButton>
					<InfoButton />
				</IconButton>
			</Header>
			<Divider />
			<OptionSelector>
				<IconButton>
					<SearchButton />
				</IconButton>
			</OptionSelector>
			<Divider />
			<InputForm />
			<Divider />
			<ButtonArea />
		</Container>
	);
}
