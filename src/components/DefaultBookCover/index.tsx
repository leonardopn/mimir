import { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { BookAuthor, BookTitle, Container, Logo } from "./styles";

interface DefaultBookCoverProps {
	title?: string;
	author?: string;
	style?: StyleProp<ViewStyle>;
	size?: "small" | "medium" | "large";
}

export function DefaultBookCover({ title, size, author, style }: DefaultBookCoverProps) {
	const { height, width } = useMemo(() => {
		switch (size) {
			case "small":
				return { width: 40, height: 55 };
			case "medium":
				return { width: 55, height: 70 };
			default:
				return { width: 70, height: 90 };
		}
	}, [size]);

	return (
		<Container style={style}>
			<Logo width={width} height={height} />
			<BookTitle size={size}>{title || "Livro sem título"}</BookTitle>
			<BookAuthor size={size}>{author || "Livro sem autor"}</BookAuthor>
		</Container>
	);
}
