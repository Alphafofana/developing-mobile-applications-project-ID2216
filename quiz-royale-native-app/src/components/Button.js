import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../colors";

// append blank space due to bug: tinyurl.com/4ubjjflx
function Button({ style, title, ...props }) {
	return (
		<TouchableOpacity {...props} style={[styles.container, style]}>
			<Text style={styles.text}>{title + " "}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "40%",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		borderRadius: 30,
		backgroundColor: Colors.GRAY,
	},
	text: {
		fontWeight: "500",
		fontSize: 16,
	},
});
export default Button;
