import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";

interface IBaseInputProps{
	label: string;
	children: React.ReactNode;
	asButton?: boolean;
	onPress?: () => void;
}

export const BaseInput = ({children, label, asButton, onPress}: IBaseInputProps) => {
	return (
		<View style={styles.baseInputContainer}>
			<Text style={styles.label}>
				{label}
			</Text>

			{asButton && (
				<Pressable 
					style = {({pressed}) => pressed ? styles.baseInputPressed : styles.baseInput} 
					onPress={onPress}
				>
					{children}
				</Pressable>
			)}
			{!asButton && (
				<View 
					style = {styles.baseInput}
				>
					{children}
				</View>
			)}
				
			
		</View>
	);
}


const styles = StyleSheet.create({
	baseInputContainer: {
		gap: 4,
		flexDirection: 'column',
	},
	label: {
		color: theme.colors.text,
		fontFamily: theme.fonts.family.regular,
		fontSize: theme.fonts.sizes.body,
	},
	baseInput: {
		borderRadius: 8,
		backgroundColor: theme.colors.background,
	},
	baseInputPressed: {
		borderRadius: 8,
		backgroundColor: theme.colors.background,
		opacity: 0.5,
	},
	
});