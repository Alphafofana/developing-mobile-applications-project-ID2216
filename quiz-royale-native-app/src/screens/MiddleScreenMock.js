import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MiddleScreenMock({ count }) {
	return (
		<View style={styles.view}>
			<Text>{count}</Text>
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
