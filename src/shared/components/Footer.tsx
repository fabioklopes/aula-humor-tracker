import { StyleSheet, Text, View } from "react-native"
import { theme } from "../themes/Theme"
import React from "react"

interface IFooterProps	{
	children: React.ReactNode;
}
export const Footer = ({ children }: IFooterProps) => {
	return (
		<View style={styles.footerContainer}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	footerContainer: {
		gap: 8,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
})