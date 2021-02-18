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
                <View>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizWizardInvite')}>
						<View style={styles.center}>
							<Text style={{fontSize: 20}}>Continue</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LobbyScreen')}>
						<View style={styles.center}>
							<Text style={{fontSize: 20}}>Back to Lobby</Text>
						</View>
					</TouchableOpacity>
				</View>
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
		backgroundColor: "white",
		width: 220,
		height: 50,
		borderRadius: 40,
		margin: 5,
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
