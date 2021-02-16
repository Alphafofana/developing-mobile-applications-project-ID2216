import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/QuizrRoyaleLogo1.png";

export default function LobbyScreen() {
	return (
		<View>
			<Text>Lobby</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(79, 81, 140, 1.0)",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 220,
		height: 100,
		marginTop: 10,
		marginBottom: 15,
	},
});
