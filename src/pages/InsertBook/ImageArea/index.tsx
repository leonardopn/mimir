import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Control, FieldPath, useController } from "react-hook-form";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { IconButton } from "../../../components/Forms/IconButton";
import { Spacer } from "../../../components/Spacer";
import { ButtonArea, Container, ImageBook, ImageBookEmpty, ImageBookWrapper } from "./styles";

interface ImageAreaProps<T> {
	//*React Hook Form
	control?: Control<T>;
	name: FieldPath<T>;
}

export function ImageArea<T>({ name, control }: ImageAreaProps<T>) {
	const theme = useTheme();

	async function handleOpenGallery() {
		try {
			const result = await ImagePicker.launchImageLibraryAsync();
			if (!result.cancelled) {
				onChange(result.uri);
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
			if (!result.cancelled) {
				onChange(result.uri);
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

	const {
		field: { value, onChange },
	} = useController({
		name,
		control,
	});

	return (
		<Container>
			<ButtonArea>
				<IconButton
					icon={{ iconFamily: "material", name: "photo-library" }}
					onPress={handleOpenGallery}
				/>
				<Spacer spacing={5} />
				<IconButton
					icon={{ iconFamily: "material", name: "photo-camera" }}
					onPress={handleOpenCamera}
				/>
				{!!value && (
					<>
						<Spacer spacing={5} />
						<IconButton
							color={theme.colors.ATTENTION_LIGHT}
							icon={{ iconFamily: "material", name: "close" }}
							onPress={() => onChange("")}
						/>
					</>
				)}
			</ButtonArea>
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
