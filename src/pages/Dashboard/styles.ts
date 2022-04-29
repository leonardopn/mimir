import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView`
    padding: 20px;
`;

export const Header = styled.View``;

export const RecentlyAdded = styled.View``;

export const RecentlyAddedHeader = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.TEXT};
`;
