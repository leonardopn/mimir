import { useNavigation } from "@react-navigation/native";
import { WrapperIconButton } from "../Forms/WrapperIconButton";
import { Title } from "../Text/Title";
import { TooltipMenu, TooltipMenuItem, TooltipMenuProps } from "../TooltipMenu";
import { Container, Content, Divider, InfoButton, ReturnButton } from "./styles";

interface HeaderStackProps {
	title?: string;
	showGoBack?: boolean;
	showInfo?: boolean;
	showDivider?: boolean;
	tooltipOptions?: TooltipMenuItem[];
	tooltipProps?: TooltipMenuProps;
}

export function HeaderStack({
	title,
	showGoBack = false,
	showInfo = false,
	showDivider = true,
	tooltipOptions,
	tooltipProps,
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
				{tooltipOptions?.length && <TooltipMenu items={tooltipOptions} {...tooltipProps} />}
			</Container>
			{showDivider && <Divider />}
		</>
	);
}
