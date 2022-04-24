import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View.attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
})`
    height: ${RFValue(280)}px;
    width: ${RFValue(180)}px;
    margin-right: ${RFValue(20)}px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 10px;
`;

export const Image = styled.Image`
    flex: 1;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

export const Informations = styled.View`
    padding: 5px;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(11)}px;
    text-align: center;
`;

export const Author = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(8)}px;
    text-align: center;
`;
