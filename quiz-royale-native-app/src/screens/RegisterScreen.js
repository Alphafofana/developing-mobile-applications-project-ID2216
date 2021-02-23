import React, { useState } from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import Colors from "../colors";
import logo from "../../assets/QuizrRoyaleLogo1.png";
import Input from "../components/Input";
import Button from "../components/Button";
import ErrorMessage from "../components/ErrorMessage";
import { useAuth } from "../services/FirebaseAuthContext";

function LoginScreen({ navigation }) {
	const { register, currentUser } = useAuth();
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [passwordConfirm, setPasswordConfirm] = React.useState("");
	const [error, setError] = useState(" ");
	const [loading, setLoading] = useState(false);

	async function handleRegister(e) {
		e.preventDefault();

		if (password !== passwordConfirm) {
			return setError("Passwords do not match");
		}
		try {
			setError("");
			setLoading(true);
			await register(email, password);
			navigation.navigate("LobbyScreen");
		} catch (error) {
			//console.error("Failed registration! Reason:" + error);
			setError(error.toString());
		}

		setLoading(false);
	}

	return (
		<SafeAreaView style={styles.main}>
			<Image source={logo} style={styles.logo} />
			<ErrorMessage error={error} />
			<Text style={styles.text}>Email </Text>
			<Input
				style={styles.input}
				placeholder={"Enter email"}
				keyboardType={"email-address"}
				value={email}
				onChangeText={setEmail}
			/>
			<Text style={styles.text}>Password </Text>
			<Input
				style={styles.input}
				placeholder={"Enter password"}
				secureTextEntry
				value={password}
				onChangeText={setPassword}
			/>
			<Text style={styles.text}>Password Confirmation</Text>
			<Input
				style={styles.input}
				placeholder={"Re enter password"}
				secureTextEntry
				value={passwordConfirm}
				onChangeText={setPasswordConfirm}
			/>
			<Button
				title={"Register"}
				style={styles.button}
				disabled={loading}
				onPress={(e) => {
					handleRegister(e);
				}}
			/>
			<Button
				title={"Back to login"}
				style={styles.button}
				onPress={() => {
					setError("");
					navigation.navigate("LoginScreen");
				}}
			/>
		</SafeAreaView>
	);
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
		marginTop: 16,
		marginBottom: 16,
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
		marginVertical: 10,
		alignItems: "center",
	},
});
export default LoginScreen;
