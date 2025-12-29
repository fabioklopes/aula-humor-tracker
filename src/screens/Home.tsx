import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
import { TNavigationScreenProps } from "../Routes";
import { Header } from "../shared/components/Header";


export const HomePage = () => {
	const navigation = useNavigation<TNavigationScreenProps>();

	return (
		<>

			<Header 
				name={undefined}
			/>

			<Button
				title='Go to Details'
				onPress={() => navigation.navigate('detail', { rate: 3 })}
			/>
			<Button
				title='Go to Set User Name'
				onPress={() => navigation.navigate('setUsername')}
			/>
		</>
	);
}