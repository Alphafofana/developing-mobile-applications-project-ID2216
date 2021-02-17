import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../colors";

function QuestionAlternative({ text, selected, handlePress }) {
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
			backgroundColor: selected ? Colors.GOLD : Colors.WHITE,
			borderColor: Colors.DARK_BLUE,
		},
	});

	return (
		<TouchableOpacity
			style={styles.wrapper}
			onPress={() => handlePress(text)}
		>
			<View style={styles.questionAlternative}>
				<Text>{text}</Text>
			</View>
		</TouchableOpacity>
	);
}

export default QuestionAlternative;
