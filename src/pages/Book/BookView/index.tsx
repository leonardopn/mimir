import { StackScreenProps } from "@react-navigation/stack";
import { useCallback, useEffect, useMemo } from "react";
import useBoolean from "react-use/lib/useBoolean";
import { AppStackRoutesParams } from "../../../Routes/app.stack.routes";
import { BookInformation } from "../../../components/BookInformation";
import { HeaderStack } from "../../../components/HeaderStack";
import { Loading } from "../../../components/Loading";
import { TooltipMenuItem } from "../../../components/TooltipMenu";
import { useConfigs } from "../../../hooks/store/useConfigs";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { deleteBook } from "../../../store/slices/books.slice";
import { Container, Content } from "./styles";
import { useTheme } from "styled-components";

interface BookViewProps extends StackScreenProps<AppStackRoutesParams, "Book-view"> {}

export function BookView({ route, navigation }: BookViewProps) {
	const { colors } = useTheme();
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
		setIsLoading(true);
		navigation.replace("BookLibrary-root");
		dispatch(deleteBook(book.id));
		setIsLoading(false);
	}, [book, dispatch, navigation, setIsLoading]);

	function handleUpdateBook() {
		console.log("Me implementa :)");
	}

	const options = useMemo<TooltipMenuItem[]>(
		() => [
			{
				title: "Atualizar",
				onPress: handleUpdateBook,
				textStyle: { color: colors.PRIMARY },
				icon: { iconFamily: "font_awesome", name: "pencil" },
			},
			{
				title: "Deletar",
				onPress: handleDeleteBook,
				textStyle: { color: colors.ATTENTION_LIGHT },
				icon: { iconFamily: "font_awesome", name: "trash" },
			},
		],
		[colors.ATTENTION_LIGHT, colors.PRIMARY, handleDeleteBook]
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
