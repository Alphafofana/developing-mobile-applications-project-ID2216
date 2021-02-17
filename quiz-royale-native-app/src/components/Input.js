import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Colors from "../colors";

export function Input({ style, ...props }) {
	return (
		<TextInput
			{...props}
			style={[styles.input, style]}
			placeholderTextColor={"darkgray"}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		backgroundColor: Colors.WHITE,
		width: "70%",
		padding: 20,
		borderRadius: 8,
		color: "black",
	},
});
export default Input;
