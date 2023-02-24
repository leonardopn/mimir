import { useAssets } from "expo-asset";
import React from "react";
import { ImageStyle, StyleProp, TouchableWithoutFeedback, ViewStyle } from "react-native";
import BookCoverDefault from "../../assets/default_book_cover.png";
import { DefaultBookCover } from "../DefaultBookCover";
import { Container, Image } from "./styles";

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
			<Container style={style} size={size}>
				{!imageUrl ? (
					<DefaultBookCover
						size={size}
						title={title}
						author={author}
						style={imageStyle}
					/>
				) : (
					<Image
						style={imageStyle}
						source={imageUrl ? { uri: imageUrl } : { uri: asset[0].uri }}
						radiusAll={!showInformations}
					/>
				)}
			</Container>
		</TouchableWithoutFeedback>
	);
}
