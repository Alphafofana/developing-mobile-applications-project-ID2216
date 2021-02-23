import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Alert,
} from "react-native";
import Colors from "../colors";
import logo from "../../assets/QuizrRoyaleLogo1.png";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../services/FirebaseAuthContext";

function LoginScreen({ navigation }) {
	const { login, currentUser } = useAuth();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [error, setError] = useState(" ");
	const [loading, setLoading] = useState(false);

	async function handleLogin(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(email, password);
			navigation.navigate("LobbyScreen");
		} catch {
			console.error("Failed to log in!");
			setError("Failed to log in");
		}

		setLoading(false);
	}

	return (
		<SafeAreaView style={styles.main} accessibilityRole="form">
			<Image source={logo} style={styles.logo} />
			<Text style={styles.text}>Username </Text>
			<Input
				style={styles.input}
				placeholder={"Email"}
				keyboardType={"email-address"}
				value={email}
				onChangeText={setEmail}
			/>
			<Text style={styles.text}>Password </Text>
			<Input
				style={styles.input}
				placeholder={"Password"}
				//secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>

			<Button
				title={"Login"}
				style={styles.button}
				disabled={loading}
				onPress={(e) => {
					handleLogin(e);
				}}
			/>
			<Button
				title={"Register"}
				style={styles.button}
				//disabled={true}
				onPress={() => notifyMessage("How about no!")}
			/>
		</SafeAreaView>
	);
}

function notifyMessage(msg) {
	Alert.alert("Currently not implemented", msg);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.MIDDLE_BLUE,
		alignItems: "center",
		//justifyContent: "center",
	},
	logo: {
		width: 220,
		height: 110,
		marginTop: 64,
		marginBottom: 32,
	},
	text: {
		textAlign: "left",
		width: "70%",
		color: Colors.WHITE,
	},
	input: {
		marginVertical: 14,
		alignItems: "center",
	},
	button: {
		marginVertical: 14,
		alignItems: "center",
	},
});
export default LoginScreen;
