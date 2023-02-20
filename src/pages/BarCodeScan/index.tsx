import { useNavigation } from "@react-navigation/native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import React, { useCallback, useEffect, useState } from "react";
import { Linking, useWindowDimensions } from "react-native";
import BarcodeMask from "react-native-barcode-mask";
import { WrapperIconButton } from "../../components/Forms/WrapperIconButton";
import { HeaderStack } from "../../components/HeaderStack";
import { useConfigs } from "../../hooks/store/useConfigs";
import { useBarCodeScanner } from "../../hooks/useBarCodeScanner";
import { useScreenOrientation } from "../../hooks/useScreenOrientation";
import {
	BarCodeContent,
	BarCodeInformationWrapper,
	ButtonTryAgain,
	Container,
	ContrastTitle,
	MessagePermission,
	Overlay,
	OverlayContent,
	ReturnButton,
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
	const { goBack } = useNavigation();
	const { changeScreenOrientation } = useScreenOrientation();
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
		changeScreenOrientation("RIGHT");
		updateConfigs({ isFullScreen: true });

		return () => {
			changeScreenOrientation("DEFAULT");
			updateConfigs({ isFullScreen: false });
		};
	}, [changeScreenOrientation, updateConfigs]);

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
					alignItems: "center",
					width: "100%",
					height: "100%",
					backgroundColor: "black",
				}}>
				<BarcodeMask width="80%" height={100} animatedLineWidth="100%" />
				<BarCodeContent>
					<WrapperIconButton onPress={goBack}>
						<ReturnButton iconFamily="material" name="arrow-back-ios" />
					</WrapperIconButton>
					<BarCodeInformationWrapper>
						<ContrastTitle>Posicione o código de barras na marcação</ContrastTitle>
					</BarCodeInformationWrapper>
				</BarCodeContent>
			</BarCodeScanner>
		</Container>
	);
}
