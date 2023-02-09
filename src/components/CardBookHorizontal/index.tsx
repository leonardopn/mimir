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
}

export function CardBookHorizontal({ data }: CardBookHorizontalProps) {
	const { author, title, publisher, isbn10, isbn13, description, image } = data;

	return (
		<Container>
			<CardBookTest imageUrl={image} size={"small"} />
			<Informations>
				<InformationWrapper>
					<MainInfo numberOfLines={1}>{title || "Sem Título"}</MainInfo>
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
					<SimpleInfo numberOfLines={2}>{description || "Sem descrição"}</SimpleInfo>
				</InformationWrapper>
			</Informations>
		</Container>
	);
}
