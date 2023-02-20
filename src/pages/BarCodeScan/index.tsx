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
	ReturnButton,
	SubMessagePermission,
} from "./styles";
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";
import { WrapperIconButton } from "../../components/Forms/WrapperIconButton";

export function BarCodeScan() {
	const [permissionResponse, requestPermission] = BarCodeScanner.usePermissions();
	const { setResult } = useBarCodeScanner();
	const { width, height } = useWindowDimensions();
	const [scanned, setScanned] = useState(false);
	const {
		functions: { updateConfigs: updateConfigs },
	} = useConfigs();
	const { goBack } = useNavigation();

	const handleRequestPermission = useCallback(async () => {
		await requestPermission();
	}, [requestPermission]);

	const handleOpenConfigs = useCallback(() => {
		Linking.openSettings();
	}, []);

	async function changeScreenOrientation(orientationLock: ScreenOrientation.OrientationLock) {
		await ScreenOrientation.lockAsync(orientationLock);
	}

	const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
		setScanned(true);
		setResult(data);
	};

	useEffect(() => {
		changeScreenOrientation(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
		updateConfigs({ isFullScreen: true });

		return () => {
			changeScreenOrientation(ScreenOrientation.OrientationLock.PORTRAIT_UP);
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
