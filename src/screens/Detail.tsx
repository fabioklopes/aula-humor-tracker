import { useRoute } from "@react-navigation/native";
import { Text } from "react-native";
import { TRoutProps } from "../Routes";

export const DetailPage = () => {
	const { params } = useRoute<TRoutProps<'detail'>>();

	return (
		<>
			<Text>Detalhes: {params.rate}</Text>
		</>
	);
}