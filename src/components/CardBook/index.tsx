import { useAssets } from "expo-asset";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import BookCoverDefault from "../../assets/default_book_cover.png";
import { Author, Container, Image, Informations, Title } from "./styles";

interface CardBookProps {
	title?: string;
	author?: string;
	imageUrl?: string;
	onPress?: () => void;
}

export function CardBook({ author, imageUrl, title, onPress }: CardBookProps) {
	const [asset] = useAssets(BookCoverDefault);
	const showInformations = !!(author && title);

	if (!asset) return null;

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Container>
				<Image
					source={imageUrl ? { uri: imageUrl } : { uri: asset[0].uri }}
					radiusAll={!showInformations}
				/>
				{showInformations && (
					<Informations>
						<Title>{title}</Title>
						<Author>{author}</Author>
					</Informations>
				)}
			</Container>
		</TouchableWithoutFeedback>
	);
}
