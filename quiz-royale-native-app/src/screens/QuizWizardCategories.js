import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function QuizWizardCategories({navigation}) {
	return (
		<>
            <Header/>
			<View style={styles.main}>
				<Text style={{fontSize: 24, color: 'white'}}>Quiz Wizard</Text>
                <view>
				<TouchableOpacity
					onPress={() => navigation.navigate('QuizWizardInvite')}
					style={styles.button}>
					<Text style={{ flex: 1, fontSize: 22, color: 'black' }}>Continue</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}>
					<Text style={{ flex: 1, fontSize: 22, color: 'black' }}>Back to Lobby</Text>
				</TouchableOpacity>
				</view>
			</View>
			<NavigationBar/>
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
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		width: 240,
		height: 55,
		textAlign: "center",
		borderRadius: 40,
		margin: 5,
	}
});
