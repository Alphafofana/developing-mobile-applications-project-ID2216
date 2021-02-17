import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import InviteCard from "../components/InviteCard";

export default function LobbyScreen({navigation}) {
	return (
		<>
            <Header/>
			<View>
				<Text>Lobby</Text>
				<Text>Your invites</Text>
				<View>
					<InviteCard/>
					<InviteCard/>
				</View>
				<view>
				<Button
					title="Quick Game"
					onPress={() => Alert.alert('Simple Button pressed')}
				/>
				<Button
					title="Create New Game"
					onPress={() => Alert.alert('Simple Button pressed')}
				/>
				</view>
			</View>
			<NavigationBar/>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "rgba(79, 81, 140, 1.0)",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		width: 220,
		height: 100,
		marginTop: 10,
		marginBottom: 15,
	},
});
