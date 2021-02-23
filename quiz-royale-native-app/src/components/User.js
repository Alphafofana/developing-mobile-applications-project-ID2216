import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../colors";

// append blank space due to bug: tinyurl.com/4ubjjflx
function User({ style, title, ...props }) {
	return (
		<TouchableOpacity {...props} style={[styles.container, style]}>
			<FontAwesome size={50} name="user" />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "25%",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
		borderRadius: 50,
		backgroundColor: Colors.WHITE,
	},
	text: {
		fontWeight: "500",
		fontSize: 16,
	},
});
export default User;
