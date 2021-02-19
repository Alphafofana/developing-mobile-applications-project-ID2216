import React from "react";
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

function LoginScreen() {
	return (
		<SafeAreaView style={styles.main}>
			<Image source={logo} style={styles.logo} />
			<Text style={styles.text}>Username </Text>
			<Input
				style={styles.input}
				placeholder={"Enter username"}
				keyboardType={"default"}
				//value={}
				//onChangeText={setEmail}
			/>
			<Text style={styles.text}>Password </Text>
			<Input
				style={styles.input}
				placeholder={"Enter Password"}
				secureTextEntry
				//value={}
				//onChangeText={setPassword}
			/>

			<Button title={"Login"} style={styles.button} />
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
