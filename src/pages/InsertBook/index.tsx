import React from "react";
import { FormInsertBookProvider } from "../../context/FormInsertBook.context";
import { InsertBookRoutes } from "../../Routes/insertBook/stack.routes";
import { Container } from "./styles";

export function InsertBook() {
	return (
		<FormInsertBookProvider>
			<Container>
				<InsertBookRoutes />
			</Container>
		</FormInsertBookProvider>
	);
}
