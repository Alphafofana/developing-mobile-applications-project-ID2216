import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

function QuizScreen() {
	return (
		<>
			<Header />
			<View style={styles.main}>
				<Text>Welcome to quiz screen</Text>
			</View>
			<NavigationBar />
		</>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.MIDDLE_BLUE,
	},
});
export default QuizScreen;
