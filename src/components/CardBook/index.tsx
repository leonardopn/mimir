import React from "react";

import { Container, Image, Informations, Author, Title } from "./styles";

interface CardBookProps {
	title: string;
	author: string;
	imageUrl: string;
}

export function CardBook({ author, imageUrl, title }: CardBookProps) {
	return (
		<Container>
			<Image source={{ uri: imageUrl }} />
			<Informations>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</Informations>
		</Container>
	);
}
