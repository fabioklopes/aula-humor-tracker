import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomePage } from "./screens/Home";
import { DetailPage } from "./screens/Detail";
import { SetUserNamePage } from "./screens/SetUserName";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "./shared/themes/Theme";

type TScreenDefinitions = {
	home: undefined,
	detail: {rate: number},
	setUsername: undefined,
}

const Stack = createNativeStackNavigator<TScreenDefinitions>();

export const AppRoutes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName='home' 
				screenLayout={({children}) => <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>} 
				screenOptions={{
					headerShown: false, 
					contentStyle: {
						backgroundColor: theme.colors.background,
					},
				}} 
				
			>

			<Stack.Screen name='home' component={HomePage} />

			<Stack.Group screenOptions={{ 
				presentation: 'formSheet', 
				sheetCornerRadius: 24
			}}>
				<Stack.Screen 
					name='detail' 
					component={DetailPage} 
					options = {{ sheetAllowedDetents: [0.8, 0.95]}}
				/>

				<Stack.Screen 
					name='setUsername' 
					component={SetUserNamePage} 
					options = {{ sheetAllowedDetents: [0.4, 0.6]}}
				/>
			</Stack.Group>
			
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//---[criando as tipagens da aplicação]---
export type TNavigationScreenProps = NativeStackNavigationProp<TScreenDefinitions>;
export type TRoutProps<T extends keyof TScreenDefinitions> = RouteProp<TScreenDefinitions, T>;