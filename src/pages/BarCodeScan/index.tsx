import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import React, { useEffect, useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { useConfigs } from "../../hooks/store/useConfigs";
import { useBarCodeScanner } from "../../hooks/useBarCodeScanner";

export function BarCodeScan() {
	const { setResult } = useBarCodeScanner();
	const { width, height } = useWindowDimensions();
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState(false);
	const {
		functions: { updateConfigs: updateConfigs },
	} = useConfigs();

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
		setResult(data);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View style={{ position: "absolute", width, height }}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{ flex: 1, backgroundColor: "black" }}
			/>
		</View>
	);
}
