import React from "react";

import { Container } from "./styles";

export interface SpacerProps {
	spacing?: number;
}

export function Spacer({ spacing = 2 }: SpacerProps) {
	return <Container spacing={spacing} />;
}
