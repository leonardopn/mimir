import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import React, { useCallback, useEffect, useState } from "react";
import { Linking, useWindowDimensions } from "react-native";
import BarcodeMask from "react-native-barcode-mask";
import { HeaderStack } from "../../components/HeaderStack";
import { useConfigs } from "../../hooks/store/useConfigs";
import { useBarCodeScanner } from "../../hooks/useBarCodeScanner";
import {
	BarCodeContent,
	BarCodeInformationWrapper,
	ButtonTryAgain,
	Container,
	ContrastTitle,
	MessagePermission,
	Overlay,
	OverlayContent,
	SubMessagePermission,
} from "./styles";

export function BarCodeScan() {
	const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions();
	const { setResult } = useBarCodeScanner();
	const { width, height } = useWindowDimensions();
	const [scanned, setScanned] = useState(false);
	const {
		functions: { updateConfigs: updateConfigs },
	} = useConfigs();

	const handleRequestPermission = useCallback(async () => {
		await requestPermission();
	}, [requestPermission]);

	const handleOpenConfigs = useCallback(() => {
		Linking.openSettings();
	}, []);

	const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
		setScanned(true);
		setResult(data);
	};

	useEffect(() => {
		updateConfigs({ isFullScreen: true });

		return () => {
			updateConfigs({ isFullScreen: false });
		};
	}, [updateConfigs]);

	useEffect(() => {
		handleRequestPermission();
	}, [handleRequestPermission]);

	if (permissionResponse?.granted === false) {
		const { canAskAgain } = permissionResponse;

		return (
			<Overlay>
				<HeaderStack showGoBack title="Leitor de código de barras" />
				<OverlayContent>
					<MessagePermission>{`Acesso a câmera foi negado ${
						canAskAgain ? "" : "e não podemos altera-lo por aqui."
					}`}</MessagePermission>
					<SubMessagePermission>
						{canAskAgain
							? "Solicite novamente abaixo."
							: "Abra o menu de configurações e altere a permissão."}
					</SubMessagePermission>
					<ButtonTryAgain
						variant={canAskAgain ? "SUCCESS" : "BLUE"}
						title={canAskAgain ? "Solicitar acesso" : "Abrir configuração"}
						onPress={canAskAgain ? handleRequestPermission : handleOpenConfigs}
					/>
				</OverlayContent>
			</Overlay>
		);
	}

	return (
		<Container width={width} height={height}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={{
					flex: 1,
					backgroundColor: "black",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<BarcodeMask width={100} height="80%" showAnimatedLine={false} edgeRadius={10} />
				<BarCodeContent>
					<BarCodeInformationWrapper>
						<ContrastTitle>Posicione o código de barras na marcação</ContrastTitle>
					</BarCodeInformationWrapper>
				</BarCodeContent>
			</BarCodeScanner>
		</Container>
	);
}
