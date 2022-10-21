import { useAssets } from "expo-asset";
import React from "react";
import BookCoverDefault from "../../assets/default_book_cover.png";
import { Author, Container, Image, Informations, Title } from "./styles";

interface CardBookProps {
	title: string;
	author: string;
	imageUrl?: string;
}

export function CardBook({ author, imageUrl, title }: CardBookProps) {
	const [asset] = useAssets(BookCoverDefault);

	if (!asset) return null;

	return (
		<Container>
			<Image source={imageUrl ? { uri: imageUrl } : { uri: asset[0].uri }} />
			<Informations>
				<Title>{title}</Title>
				<Author>{author}</Author>
			</Informations>
		</Container>
	);
}
