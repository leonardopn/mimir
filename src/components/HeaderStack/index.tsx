import { Container, Divider, InfoButton, ReturnButton, Content } from "./styles";
import { Title } from "../Text/Title";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { useNavigation } from "@react-navigation/native";

interface HeaderStackProps {
	title: string;
	showGoBack?: boolean;
}

export function HeaderStack({ title, showGoBack = false }: HeaderStackProps) {
	const navigate = useNavigation();

	function handleGoBack() {
		navigate.goBack();
	}

	return (
		<>
			<Container>
				{showGoBack && (
					<WrapperIconButton onPress={handleGoBack}>
						<ReturnButton iconFamily="material" name="arrow-back-ios" />
					</WrapperIconButton>
				)}
				<Content>
					<Title>{title}</Title>
					<WrapperIconButton>
						<InfoButton iconFamily="foundation" name="info" />
					</WrapperIconButton>
				</Content>
			</Container>
			<Divider />
		</>
	);
}
