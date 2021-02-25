import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MiddleScreenMock({ eliminated, users }) {
	return (
		<View style={styles.view}>
			<Text>
				Users knocked out last round:{" "}
				{eliminated.reduce((acc, user) => acc + " " + user, "")}
			</Text>
			<Text>
				Users remaining:{" "}
				{users.reduce((acc, user) => acc + " " + user.name, "")}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		paddingTop: 100,
		paddingLeft: 100,
	},
});

export default MiddleScreenMock;
