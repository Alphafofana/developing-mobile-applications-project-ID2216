import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import InviteCard from "../components/InviteCard";

export default function LobbyScreen({navigation}) {
	return (
		<>
            <Header/>
			<View style={styles.main}>
				<Text style={{fontSize: 24, color: 'white'}}>Lobby</Text>
				<Text style={{fontSize: 18, color: 'white'}}>Your invites</Text>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('QuizScreen')}>
						<InviteCard/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('QuizScreen')}>
						<InviteCard/>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizScreen')}>
						<View style={styles.center}>
							<Text style={{fontSize: 20}}>Quick Game</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizWizardCategories')}>
						<View style={styles.center}>
							<Text style={{fontSize: 20}}>Start New Game</Text>
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
