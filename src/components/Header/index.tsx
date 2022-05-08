import React from "react";
import { IconButton } from "../Forms/IconButton";
import Input from "../Forms/Input";
import { Container, Logo, SearchIcon } from "./styles";

export function Header() {
	return (
		<Container>
			<IconButton>
				<Logo width={22} height={40} />
			</IconButton>
			<Input placeholder="Procure seu livro..." />
			<IconButton>
				<SearchIcon />
			</IconButton>
		</Container>
	);
}
