import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../colors";

function QuestionAlternative({ text, selected }) {
	return (
		<TouchableOpacity style={styles.wrapper}>
			<View style={styles.questionAlternative}>
				<Text>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		margin: 5,
	},
	questionAlternative: {
		minHeight: 100,
		padding: 10,
		borderWidth: 3,
		borderRadius: 5,
		backgroundColor: Colors.WHITE,
		borderColor: Colors.DARK_BLUE,
	},
});

export default QuestionAlternative;
