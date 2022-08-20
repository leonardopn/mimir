import React from "react";
import { WrapperIconButton } from "../../components/Forms/WrapperIconButton";
import { Title } from "../../components/Text/Title";
import { InsertBookRoutes } from "../../Routes/insertBook/stack.routes";
import { Container, Divider, Header, InfoButton } from "./styles";

export function InsertBook() {
	return (
		<Container>
			<Header>
				<Title>Cadastro de livro</Title>
				<WrapperIconButton>
					<InfoButton iconFamily="foundation" name="info" />
				</WrapperIconButton>
			</Header>
			<Divider />
			<InsertBookRoutes />
		</Container>
	);
}
