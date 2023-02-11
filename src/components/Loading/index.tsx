import { Spacer } from "../Spacer";
import { Title } from "../Text/Title";
import { Container, ActivityIndicator } from "./styles";

interface LoadingProps {
	text?: string;
	showText?: boolean;
}

export function Loading({ text = "Carregando...", showText = true }: LoadingProps) {
	return (
		<Container>
			<ActivityIndicator />
			{showText && (
				<>
					<Spacer spacing={5} />
					<Title>{text}</Title>
				</>
			)}
		</Container>
	);
}
