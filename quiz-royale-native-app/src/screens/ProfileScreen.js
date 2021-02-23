import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Input from "../components/Input";
import User from "../components/User";
import Button from "../components/Button";
import { useAuth } from "../services/FirebaseAuthContext";

export default function ProfileScreen({ navigation }) {
	const { logout, updateName, currentUser } = useAuth();
	const [UsernameInput, setUsernameInput] = React.useState("");
	const [Username, setUsername] = React.useState(
		currentUser && currentUser.displayName
	);
	const [error, setError] = useState(" ");
	const [loading, setLoading] = useState(false);

	async function handleSetUsername(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await updateName(UsernameInput);
			setUsername(UsernameInput);
			//console.log("logged in succesfully!");
		} catch {
			//console.error("Failed to log in!");
			setError("failed to update username!");
		}

		setLoading(false);
	}

	async function handleLogout(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await logout();
			//console.log("logged in succesfully!");
			navigation.navigate("LoginScreen");
		} catch {
			//console.error("Failed to log in!");
			setError("failed to logout!");
		}

		setLoading(false);
	}

	return (
		<>
			<SafeAreaView style={styles.main}>
				<Header />
				<Text style={{ fontSize: 24, color: "white" }}>Profile</Text>
				<User />
				<Text
					style={{ fontSize: 18, color: "white", marginVertical: 34 }}
				>
					{currentUser && Username}
				</Text>
				<Input
					style={styles.input}
					placeholder={"Enter username"}
					keyboardType={"default"}
					value={UsernameInput}
					onChangeText={setUsernameInput}
				/>
				<Button
					title={"Change username"}
					style={styles.button}
					disabled={loading}
					onPress={(e) => {
						handleSetUsername(e);
					}}
				/>
				<Button
					title={"Logout"}
					style={styles.button}
					disabled={loading}
					onPress={(e) => {
						handleLogout(e);
					}}
				/>
			</SafeAreaView>
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
		marginVertical: 10,
		alignItems: "center",
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
