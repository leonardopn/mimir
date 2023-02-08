import { Container, Divider, InfoButton, ReturnButton, Content } from "./styles";
import { Title } from "../Text/Title";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { useNavigation } from "@react-navigation/native";

interface HeaderStackProps {
	title?: string;
	showGoBack?: boolean;
	showInfo?: boolean;
	showDivider?: boolean;
}

export function HeaderStack({
	title,
	showGoBack = false,
	showInfo = false,
	showDivider = true,
}: HeaderStackProps) {
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
					{!!title && <Title>{title}</Title>}
					{showInfo && (
						<WrapperIconButton>
							<InfoButton iconFamily="foundation" name="info" />
						</WrapperIconButton>
					)}
				</Content>
			</Container>
			{showDivider && <Divider />}
		</>
	);
}
