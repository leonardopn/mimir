import React from "react";
import { StyleProp, TextStyle } from "react-native";
import {
	AntDesignIcon,
	EntypoIcon,
	FontAwesome5Icon,
	FontAwesomeIcon,
	FoundationIcon,
	MaterialCommunityIconsIcon,
} from "./styles";

interface VectorIconProps {
	iconFamily:
		| "ant_design"
		| "material_community"
		| "foundation"
		| "font_awesome"
		| "font_awesome_5"
		| "entypo";
	name: string;
	style?: StyleProp<TextStyle>;
}

export function VectorIcon({ iconFamily, name, style }: VectorIconProps) {
	switch (iconFamily) {
		case "ant_design":
			return <AntDesignIcon name={name} style={style} />;
		case "material_community":
			return <MaterialCommunityIconsIcon name={name} style={style} />;
		case "foundation":
			return <FoundationIcon name={name} style={style} />;
		case "font_awesome":
			return <FontAwesomeIcon name={name} style={style} />;
		case "font_awesome_5":
			return <FontAwesome5Icon name={name} style={style} />;
		case "entypo":
			return <EntypoIcon name={name} style={style} />;
		default:
			return null;
	}
}
