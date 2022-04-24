import React from "react";
import { Container, Logo, SearchIcon } from "./styles";

import { Input } from "../Forms/Input";
import { IconButton } from "../Forms/IconButton";

interface HeaderProps {}

export function Header({}: HeaderProps) {
    return (
        <Container>
            <IconButton>
                <Logo width={22} height={40}></Logo>
            </IconButton>
            <Input placeholder="Procure seu livro..."></Input>
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
        </Container>
    );
}
