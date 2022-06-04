import React, { SetStateAction, Dispatch } from "react";
import { Container, Heart } from "./styles";

interface FavoriteButtonProps {
	isFavorite: boolean;
	setIsFavorite: Dispatch<SetStateAction<boolean>>;
	onPress?: () => void;
}

export function FavoriteButton({ setIsFavorite, isFavorite, onPress }: FavoriteButtonProps) {
	function handleToggleIsFavorite() {
		setIsFavorite(!isFavorite);
		onPress && onPress();
	}

	return (
		<Container onPress={handleToggleIsFavorite}>
			<Heart
				iconFamily="ant_design"
				name={isFavorite ? "heart" : "hearto"}
				isFavorite={isFavorite}
			/>
		</Container>
	);
}
