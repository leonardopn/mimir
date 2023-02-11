import { MarkRequired } from "ts-essentials";
import { HeaderStack } from "../../components/HeaderStack";
import { ButtonTryAgain, Container, Content, ErrorMessage, ErrorSubMessage } from "./styles";

interface ErrorPageProps {
	title?: string;
	showHeader?: boolean;
	error?: {
		message?: string;
		subMessage?: string;
	};
	onTryAgain?: () => void;
}

const defaultErrorProps: MarkRequired<ErrorPageProps, "error">["error"] = {
	message: "Ops, um erro ocorreu...",
	subMessage: "Tente novamente mais tarde.",
};

export function ErrorPage({ showHeader, title, onTryAgain, error }: ErrorPageProps) {
	const errorToUse = { ...defaultErrorProps, ...error };

	return (
		<Container>
			{showHeader && <HeaderStack title={title} showGoBack />}
			<Content>
				{!!errorToUse.message && <ErrorMessage>{errorToUse.message}</ErrorMessage>}
				{!!errorToUse.subMessage && (
					<ErrorSubMessage>{errorToUse.subMessage}</ErrorSubMessage>
				)}
				{onTryAgain && <ButtonTryAgain title="Tentar novamente" onPress={onTryAgain} />}
			</Content>
		</Container>
	);
}
