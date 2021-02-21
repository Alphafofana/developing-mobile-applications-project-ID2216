import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../colors";

export default function InviteCar({navigation}) {
	return (
		<View style={styles.main}>
			<View style={styles.categories}>
				<Text>Sport</Text>
				<Text>History</Text>
				<Text>Science</Text>
			</View>
			<View style={styles.meta}>
				<Text>Created by Richard</Text>
				<Text>10 invited</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 5,
		marginTop: 5,
		padding: 5,
		width: 325,
		borderRadius: 4,
		backgroundColor: Colors.LIGHT_BLUE,
	},
	categories: {
		flex: 1,
		flexDirection: "column",
	},
	meta: {
		flex: 1,
		flexDirection: "column",
		textAlign: "right",
	},
});
