import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Colors from "../colors";

function NavigationBar() {
	return (
		<View style={styles.view}>
			<TouchableOpacity>
				<FontAwesome size={50} name="user" color={Colors.WHITE} />
			</TouchableOpacity>
			<TouchableOpacity>
				<FontAwesome size={50} name="home" color={Colors.WHITE} />
			</TouchableOpacity>
			<TouchableOpacity>
				<FontAwesome5
					size={50}
					name="chart-line"
					color={Colors.WHITE}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	view: {
		backgroundColor: Colors.DARK_BLUE,
		paddingTop: 20,
		paddingBottom: 20,
		color: Colors.WHITE,
		flexDirection: "row",
		alignSelf: "stretch",
		justifyContent: "space-around",
	},
});

export default NavigationBar;
