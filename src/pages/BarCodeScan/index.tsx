import { StackScreenProps } from "@react-navigation/stack";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useConfigs } from "../../hooks/store/useConfigs";
import { InsertBookStackParamList } from "../../Routes/insertBook/stack.routes";

interface BarCodeScanProps
	extends StackScreenProps<InsertBookStackParamList, "Book-search-barcode"> {}

export function BarCodeScan({ route }: BarCodeScanProps) {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState(false);
	const {
		functions: { updateConfigs: updateConfigs },
	} = useConfigs();

	const { onScanSuccess } = route.params;

	useEffect(() => {
		updateConfigs({ isFullScreen: true });

		return () => {
			updateConfigs({ isFullScreen: false });
		};
	}, [updateConfigs]);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === "granted");
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
		setScanned(true);
		onScanSuccess(data);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={{ flex: 1 }}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{ flex: 1, backgroundColor: "black" }}
			/>
		</View>
	);
}
