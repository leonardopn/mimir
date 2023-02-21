import { StackScreenProps } from "@react-navigation/stack";
import { useEffect } from "react";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { useConfigs } from "../../../hooks/store/useConfigs";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { Container, Content } from "./styles";

interface BookViewProps extends StackScreenProps<AppStackRoutesParams, "Book-view"> {}

export function BookView({ route }: BookViewProps) {
	const { book } = route.params;
	const {
		functions: { updateConfigs },
	} = useConfigs();

	useEffect(() => {
		updateConfigs({ showTopNavbar: false });
		return () => updateConfigs({ showTopNavbar: true });
	}, [updateConfigs]);

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} />
			<Content>
				<BookInformation book={book} />
			</Content>
		</Container>
	);
}
