import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"

interface IHeaderProps	{
	name: string | undefined;
}
export const Header = ({ name }: IHeaderProps) => {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.headerText}>Olá,</Text>
			<Text style={styles.headerBoldText}>{!name ? 'qual é o seu nome?' : `${name}!` }</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		gap: 8,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerText: {
		fontSize: theme.fonts.sizes.title, 
		fontFamily: theme.fonts.family.regular,
	},
	headerBoldText: {
		fontSize: theme.fonts.sizes.title,
		color: theme.colors.primary,
		fontFamily: theme.fonts.family.bold,
	},
	
})