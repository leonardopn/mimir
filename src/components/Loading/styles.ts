import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
	color: theme.colors.PRIMARY,
	size: "large",
}))``;
