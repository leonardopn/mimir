import { TouchableWithoutFeedback } from "react-native";
import { Spacer } from "../Spacer";
import {
	CardBookTest,
	Container,
	Informations,
	InformationWrapper,
	MainInfo,
	SimpleInfo,
} from "./styles";

interface CardBookHorizontalProps {
	data: {
		image?: string;
		title?: string;
		author?: string;
		publisher?: string;
		isbn10?: string;
		isbn13?: string;
		description?: string;
	};
	onPress?: () => void;
}

export function CardBookHorizontal({ data, onPress }: CardBookHorizontalProps) {
	const { author, title, publisher, isbn10, isbn13, description, image } = data;

	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<Container>
				<CardBookTest imageUrl={image} size={"small"} onPress={onPress} />
				<Informations>
					<InformationWrapper>
						<MainInfo>{title || "Sem Título"}</MainInfo>
					</InformationWrapper>
					<InformationWrapper>
						<SimpleInfo>{author || "Sem Autor"}</SimpleInfo>
					</InformationWrapper>
					<InformationWrapper>
						<SimpleInfo>{publisher || "Sem editora"}</SimpleInfo>
					</InformationWrapper>
					<Spacer spacing={5} />
					<InformationWrapper>
						<MainInfo>
							ISBN-10: <SimpleInfo>{isbn10 || "Sem ISBN-10"}</SimpleInfo>
						</MainInfo>
					</InformationWrapper>
					<InformationWrapper>
						<MainInfo>
							ISBN-13: <SimpleInfo>{isbn13 || "Sem ISBN-13"}</SimpleInfo>
						</MainInfo>
					</InformationWrapper>
					<Spacer spacing={5} />
					<InformationWrapper>
						<SimpleInfo>{description || "Sem descrição"}</SimpleInfo>
					</InformationWrapper>
				</Informations>
			</Container>
		</TouchableWithoutFeedback>
	);
}
