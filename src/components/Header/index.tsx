import React, { useEffect } from "react";
import { useControllerContext } from "../../context/Form.context";
import { FavoriteButton } from "../Forms/FavoriteButton";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { Spacer } from "../Spacer";
import { Container, Logo, SearchIcon, WrapperButtons } from "./styles";

export function Header() {
	const { form } = useControllerContext();
	const [isFavorited, setIsFavorited] = React.useState(false);

	useEffect(() => {
		setIsFavorited(form?.watch("isFavorited"));
	}, [form?.watch("isFavorited")]);

	return (
		<Container>
			<WrapperIconButton>
				<Logo width={22} height={40} />
			</WrapperIconButton>
			<WrapperButtons>
				{!!form && (
					<FavoriteButton
						isFavorite={isFavorited}
						setIsFavorite={state => {
							setIsFavorited(state);
							form?.setValue("isFavorited", state);
						}}
					/>
				)}
				<Spacer spacing={5} />
				<WrapperIconButton>
					<SearchIcon />
				</WrapperIconButton>
			</WrapperButtons>
		</Container>
	);
}
