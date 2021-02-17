import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../colors";

function QuestionAlternative(props) {
	return (
		<View style={styles.question}>
			<Text style={styles.questionText}>{props.text}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	question: {
		padding: 10,
		minHeight: 150,
		backgroundColor: Colors.WHITE,
		borderWidth: 3,
		borderRadius: 5,
		borderColor: Colors.DARK_BLUE,
		margin: 5,
	},
	questionText: {
		fontSize: 18,
	},
});

export default QuestionAlternative;
