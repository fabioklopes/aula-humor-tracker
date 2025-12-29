import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { TNavigationScreenProps } from "../Routes";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";


export const HomePage = () => {
	const navigation = useNavigation<TNavigationScreenProps>();

	return (
		<>
			<Header 
				name={undefined}
			/>

			<View style={{ flex: 1 }} />

			<Footer>
				<Text style={{fontFamily: 'body'}}>HomePage</Text>
			</Footer>
		</>
	);
}