import React from "react";
import { FormInsertBookProvider } from "../../context/FormInsertBook.context";
import { useConfigs } from "../../hooks/store/useConfigs";
import { InsertBookStackRoutes } from "../../Routes/InsertBook/index.stack.routes";
import { Container } from "./styles";

export function InsertBook() {
	const {
		state: { isFullScreen },
	} = useConfigs();

	return (
		<FormInsertBookProvider>
			<Container isFullScreen={isFullScreen}>
				<InsertBookStackRoutes />
			</Container>
		</FormInsertBookProvider>
	);
}
