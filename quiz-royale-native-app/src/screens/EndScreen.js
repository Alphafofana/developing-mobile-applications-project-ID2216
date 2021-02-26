import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function EndScreen({ navigation, userHasWon }) {
	return (
		<>
			<Header />
			<View style={styles.main}>
				<Text style={{ fontSize: 24, color: "white" }}>
					{userHasWon ? "You Win" : "Rillmeister Wins"}
				</Text>
				<Text style={{ fontSize: 18, color: "white" }}>
					Username of the winner
				</Text>

				<View style={{ flex: 1, justifyContent: "space-between" }}>
					<View style={StyleSheet.mainmiddlescreen}>
						<Text
							style={{
								fontSize: 18,
								color: "white",
								fontWeight: "bold",
							}}
						>
							Eliminated
						</Text>
						<View style={styles.line}></View>
						<Text style={{ fontSize: 18, color: "white" }}>
							{userHasWon ? "Rillmeister" : "User"}
						</Text>
					</View>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("LobbyScreen")}
					>
						<View style={styles.center}>
							<Text style={{ fontSize: 18 }}>Back to Lobby</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<NavigationBar navigation={navigation} />
		</>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: Colors.MIDDLE_BLUE,
	},
	button: {
		backgroundColor: "white",
		width: 220,
		height: 50,
		borderRadius: 40,
		margin: 5,
		marginBottom: 20,
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	mainmiddlescreen: {
		flex: 1,
		textAlign: "left",
	},
	line: {
		borderBottomColor: "white",
		borderBottomWidth: 2,
		width: 280,
	},
});
