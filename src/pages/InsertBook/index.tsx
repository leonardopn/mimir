import React from 'react';
import { IconButton } from '../../components/Forms/IconButton';
import { Title } from '../../components/Text/Title';
import {
	ButtonArea,
	Container,
	Divider,
	Header,
	InfoButton,
	InputForm,
	OptionSelector,
} from './styles';

interface InsertBookProps {}

export function InsertBook({}: InsertBookProps) {
	return (
		<Container>
			<Header>
				<Title>Cadastrar um novo livro</Title>
				<IconButton>
					<InfoButton />
				</IconButton>
			</Header>
			<Divider></Divider>
			<OptionSelector></OptionSelector>
			<Divider></Divider>
			<InputForm></InputForm>
			<Divider></Divider>
			<ButtonArea></ButtonArea>
		</Container>
	);
}
