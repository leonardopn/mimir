import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Dashboard() {
	return (
		<View>
			<Text>Home page</Text>
			<Link href="../Book/View">VAI PRA VIEW</Link>
		</View>
	);
}
