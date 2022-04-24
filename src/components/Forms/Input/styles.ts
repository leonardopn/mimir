import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export const Container: React.FC<TextInputProps> = styled.TextInput`
    flex: 1;
    background-color: white;
    border-radius: 10px;
    height: 40px;
    padding: 10px;
`;
