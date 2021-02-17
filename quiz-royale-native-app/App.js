import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LobbyScreen from "./src/screens/LobbyScreen";
import QuizScreen from "./src/screens/QuizScreen";

export default function App() {
	return (
		<>
			<LobbyScreen/>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
