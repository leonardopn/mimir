import { useAssets } from "expo-asset";
import React from "react";
import { ImageStyle, StyleProp, TouchableWithoutFeedback, ViewStyle } from "react-native";
import BookCoverDefault from "../../assets/default_book_cover.png";
import { Author, Container, Image, Informations, Title } from "./styles";

interface CardBookProps {
	title?: string;
	author?: string;
	imageUrl?: string;
	onPress?: () => void;
	size?: "small" | "medium" | "large";
	style?: StyleProp<ViewStyle>;
	imageStyle?: StyleProp<ImageStyle>;
}

export function CardBook({
	author,
	imageUrl,
	title,
	onPress,
	size = "large",
	style,
	imageStyle,
}: CardBookProps) {
	const [asset] = useAssets(BookCoverDefault);
	const showInformations = !!(author && title);

	if (!asset) return null;

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Container size={size} style={style}>
				<Image
					style={imageStyle}
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
