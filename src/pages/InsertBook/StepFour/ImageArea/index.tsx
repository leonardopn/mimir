import * as ImagePicker from "expo-image-picker";
import React from "react";
import { useController } from "react-hook-form";
import { Alert } from "react-native";
import { useTheme } from "styled-components/native";
import { IconButton } from "../../../../components/Forms/IconButton";
import { Spacer } from "../../../../components/Spacer";
import { useFormInsertBookContext } from "../../../../context/FormInsertBook.context";
import { ButtonWrapper, Container, ImageBook, ImageBookEmpty, ImageBookWrapper } from "./styles";

export function ImageArea() {
	const { colors } = useTheme();

	const {
		form: { control, resetField },
	} = useFormInsertBookContext();

	const {
		field: { onChange, value },
	} = useController({ control, name: "image" });

	async function handleOpenGallery() {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.canceled) {
				onChange(result.assets[0].uri);
			} else {
				onChange("");
			}
		} catch (error) {
			Alert.alert(
				"Não foi possível abrir a galeria.",
				"Verifique se ela está ligada e/ou todas as permissões foram aceitas. "
			);
		}
	}

	async function handleOpenCamera() {
		try {
			const result = await ImagePicker.launchCameraAsync();
			if (!result.canceled) {
				onChange(result.assets[0].uri);
			} else {
				onChange("");
			}
		} catch (error) {
			Alert.alert(
				"Não foi possível abrir a câmera.",
				"Verifique se ela está ligada e/ou todas as permissões foram aceitas. "
			);
		}
	}

	function handleCancel() {
		resetField("image");
	}

	return (
		<Container>
			<ButtonWrapper>
				<IconButton
					icon={{ iconFamily: "font_awesome_5", name: "camera" }}
					onPress={handleOpenCamera}
				/>
				<Spacer spacing={5} />
				<IconButton
					icon={{ iconFamily: "material", name: "photo" }}
					onPress={handleOpenGallery}
				/>
				<Spacer spacing={5} />
				{!!value && (
					<IconButton
						color={colors.ATTENTION}
						icon={{ iconFamily: "material_community", name: "backspace" }}
						onPress={handleCancel}
					/>
				)}
			</ButtonWrapper>
			<ImageBookWrapper isEmpty={!value}>
				{(value as string)?.length ? (
					<ImageBook
						source={{
							uri: value as string,
						}}
					/>
				) : (
					<ImageBookEmpty />
				)}
			</ImageBookWrapper>
		</Container>
	);
}
