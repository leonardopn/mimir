import React from "react";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import Input from "../Forms/Input";
import { Container, Logo, SearchIcon } from "./styles";

export function Header() {
	return (
		<Container>
			<WrapperIconButton>
				<Logo width={22} height={40} />
			</WrapperIconButton>
			<Input placeholder="Procure seu livro..." />
			<WrapperIconButton>
				<SearchIcon />
			</WrapperIconButton>
		</Container>
	);
}
