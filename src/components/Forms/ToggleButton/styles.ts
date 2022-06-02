import { Switch, Text, View } from "react-native";
import styled from "styled-components/native";
import { ToggleButtonProps } from ".";

export const Container = styled(View)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Toggle = styled(Switch)<ToggleButtonProps>``;

export const Label = styled(Text)``;
