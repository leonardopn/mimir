import React, { useEffect } from "react";
import { useControllerContext } from "../../context/Form.context";
import { FavoriteButton } from "../Forms/FavoriteButton";
import { WishListButton } from "../Forms/WishListButton";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { Spacer } from "../Spacer";
import { Container, Logo, SearchIcon, WrapperButtons } from "./styles";

enum fields {
	"addInWishList" = "addInWishList",
	"isFavorited" = "isFavorited",
}

export function Header() {
	const { form } = useControllerContext();
	const [isFavorited, setIsFavorited] = React.useState(false);
	const [addWishListButton, setAddWishListButton] = React.useState(false);

	useEffect(() => {
		setIsFavorited(form?.watch(fields.isFavorited));
		setAddWishListButton(form?.watch(fields.addInWishList));
	}, [form?.watch([fields.isFavorited, fields.addInWishList])]);

	return (
		<Container>
			<WrapperIconButton>
				<Logo width={22} height={40} />
			</WrapperIconButton>
			<WrapperButtons>
				{!!form && (
					<WishListButton
						addInWishList={addWishListButton}
						setAddInWishList={state => {
							setAddWishListButton(state);
							form?.setValue(fields.addInWishList, state);
						}}
					/>
				)}
				<Spacer spacing={10} />
				{!!form && (
					<FavoriteButton
						isFavorite={isFavorited}
						setIsFavorite={state => {
							setIsFavorited(state);
							form?.setValue(fields.isFavorited, state);
						}}
					/>
				)}
				<Spacer spacing={10} />
				<WrapperIconButton>
					<SearchIcon />
				</WrapperIconButton>
			</WrapperButtons>
		</Container>
	);
}
