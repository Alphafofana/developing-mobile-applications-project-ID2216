import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Colors from "../colors";
import logo from "../../assets/logo-small.png";

function Header() {
	return (
		<View style={styles.header}>
			<Image source={logo} style={styles.logo} />
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingTop: 50,
		backgroundColor: Colors.MIDDLE_BLUE,
		alignItems: "center",
	},
	logo: {
		width: 70,
		height: 50,
	},
});

export default Header;
