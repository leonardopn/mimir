import React, { SetStateAction, Dispatch } from "react";
import { Container, Icon } from "./styles";

interface WishListButtonProps {
	addInWishList: boolean;
	setAddInWishList: Dispatch<SetStateAction<boolean>>;
	onPress?: () => void;
}

export function WishListButton({ setAddInWishList, addInWishList, onPress }: WishListButtonProps) {
	function handleToggleIsFavorite() {
		setAddInWishList(!addInWishList);
		onPress && onPress();
	}

	return (
		<Container onPress={handleToggleIsFavorite}>
			<Icon
				iconFamily="material_community"
				name={addInWishList ? "cart" : "cart-outline"}
				addWishList={addInWishList}
			/>
		</Container>
	);
}
