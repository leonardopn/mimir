import { StackScreenProps } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo } from "react";
import { MenuItemProps } from "react-native-hold-menu/lib/typescript/components/menu/types";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { useConfigs } from "../../../hooks/store/useConfigs";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { deleteBook } from "../../../store/slices/books.slice";
import { Container, Content } from "./styles";
import useBoolean from "react-use/lib/useBoolean";
import { Loading } from "../../../components/Loading";

interface BookViewProps extends StackScreenProps<AppStackRoutesParams, "Book-view"> {}

export function BookView({ route, navigation }: BookViewProps) {
	const [isLoading, setIsLoading] = useBoolean(false);
	const { book } = route.params;
	const {
		functions: { updateConfigs },
	} = useConfigs();
	const dispatch = useAppDispatch();

	useEffect(() => {
		updateConfigs({ showTopNavbar: false });
		return () => updateConfigs({ showTopNavbar: true });
	}, [updateConfigs]);

	const handleDeleteBook = useCallback(() => {
		console.log(book);
		setIsLoading(true);
		navigation.replace("BookLibrary-root");
		dispatch(deleteBook(book.id));
		setIsLoading(false);
	}, [book, dispatch, navigation, setIsLoading]);

	function handleUpdateBook() {
		throw new Error("Not implemented yet! :(");
	}

	const options: MenuItemProps[] = useMemo(
		() => [
			{ text: "Editar", icon: "edit", onPress: handleUpdateBook },
			{
				text: "Apagar",
				icon: "trash",
				isDestructive: true,
				onPress: handleDeleteBook,
			},
		],
		[handleDeleteBook]
	);

	if (isLoading) return <Loading text="Carregando..." showText={true} />;

	return (
		<Container>
			<HeaderStack showGoBack showDivider={false} tooltipOptions={options} />
			<Content>
				<BookInformation book={book} />
			</Content>
		</Container>
	);
}
