import React from "react";
import { FormInsertBookProvider } from "../../context/FormInsertBook.context";
import { useConfigs } from "../../hooks/store/useConfigs";
import { InsertBookRoutes } from "../../Routes/insertBook/stack.routes";
import { Container } from "./styles";

export function InsertBook() {
	const {
		state: { isFullScreen },
	} = useConfigs();

	return (
		<FormInsertBookProvider>
			<Container isFullScreen={isFullScreen}>
				<InsertBookRoutes />
			</Container>
		</FormInsertBookProvider>
	);
}
