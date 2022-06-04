import { RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";
import styled from "styled-components/native";
import LogoMimir from "../../assets/logo.svg";

export const Container = styled.View`
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors.PRIMARY};
	height: ${RFValue(70)}px;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
`;

export const WrapperButtons = styled.View`
	flex-direction: row;
`;

export const Logo = styled(LogoMimir)`
	margin-right: 15px;
`;

export const SearchIcon = styled(AntDesign).attrs({ name: "search1" })`
	color: ${({ theme }) => theme.colors.SECONDARY};
	font-size: ${RFValue(30)}px;
	margin-left: 15px;
`;
