import React from "react";
import { IconButton } from "../../components/Forms/IconButton";
import { Title } from "../../components/Text/Title";
import {
	ButtonArea,
	Container,
	Divider,
	Header,
	InfoButton,
	InputForm,
	OptionSelector,
	OptionSelectorButton,
	OptionSelectorIconButton,
} from "./styles";

export function InsertBook() {
	return (
		<Container>
			<Header>
				<Title>Cadastrar um novo livro</Title>
				<IconButton>
					<InfoButton iconFamily="foundation" name="info" />
				</IconButton>
			</Header>
			<Divider />
			<OptionSelector>
				<OptionSelectorButton>
					<OptionSelectorIconButton iconFamily="font_awesome" name="search" />
				</OptionSelectorButton>
				<OptionSelectorButton>
					<OptionSelectorIconButton iconFamily="material_community" name="barcode-scan" />
				</OptionSelectorButton>
				<OptionSelectorButton variant="csv">
					<OptionSelectorIconButton iconFamily="font_awesome_5" name="file-csv" />
				</OptionSelectorButton>
			</OptionSelector>
			<Divider />
			<InputForm />
			<Divider />
			<ButtonArea />
		</Container>
	);
}
