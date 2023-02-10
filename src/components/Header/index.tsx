import React, { useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useControllerContext } from "../../context/Form.context";
import { useConfigs } from "../../hooks/store/useConfigs";
import { ToggleIconButton } from "../Forms/ToggleIconButton";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { Spacer } from "../Spacer";
import { Container, Logo, SearchIcon, WrapperButtons } from "./styles";

enum fields {
	"addInWishList" = "addInWishList",
	"isFavorited" = "isFavorited",
}

export function Header() {
	const {
		state: { showTopNavbar, isFullScreen },
	} = useConfigs();
	const { form } = useControllerContext();
	const [isFavorited, setIsFavorited] = React.useState(false);
	const [addWishListButton, setAddWishListButton] = React.useState(false);

	useEffect(() => {
		setIsFavorited(form?.watch(fields.isFavorited));
		setAddWishListButton(form?.watch(fields.addInWishList));
	}, [form?.watch([fields.isFavorited, fields.addInWishList])]);

	function handleChangeIsFavorited() {
		setAddWishListButton(false);
		setIsFavorited(!isFavorited);
		form?.setValue(fields.isFavorited, !isFavorited);
		form?.setValue(fields.addInWishList, false);

		if (!isFavorited) {
			ToastAndroid.show("Adicionado aos favoritos", ToastAndroid.SHORT);
		}
	}

	function handleChangeIsAddInWishList() {
		setIsFavorited(false);
		setAddWishListButton(!addWishListButton);
		form?.setValue(fields.addInWishList, !addWishListButton);
		form?.setValue(fields.isFavorited, false);

		if (!addWishListButton) {
			ToastAndroid.show("Adicionado à lista de desejos", ToastAndroid.SHORT);
		}
	}

	if (!showTopNavbar) return null;
	if (isFullScreen) return null;

	return (
		<Container>
			<WrapperIconButton>
				<Logo width={22} height={40} />
			</WrapperIconButton>
			<WrapperButtons>
				{!!form && (
					<ToggleIconButton
						iconFamily="material_community"
						iconName="heart"
						secondaryIconName="heart-outline"
						value={addWishListButton}
						setValue={handleChangeIsAddInWishList}
					/>
				)}
				<Spacer spacing={10} />
				{!!form && (
					<ToggleIconButton
						iconFamily="material_community"
						iconName="star"
						secondaryIconName="star-outline"
						value={isFavorited}
						setValue={handleChangeIsFavorited}
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
