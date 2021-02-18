import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function QuizWizardInvite({navigation}) {
	return (
		<>
            <Header/>
			<View style={styles.main}>
				<Text style={{fontSize: 24, color: 'white'}}>Quiz Wizard</Text>
				<View>
					<Text style={{color: 'white', paddingLeft: 12}}>Search</Text>
					<TouchableOpacity style={styles.searchFriend}>
						<View style={styles.friendText}>
							<Text style={{color: 'gray', fontSize: 20}}>Username</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.friend}>
						<View style={styles.friendText}>
							<Text style={{color: 'white', fontSize: 20}}>Edvin</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.friend}>
						<View style={styles.friendText}>
							<Text style={{color: 'white', fontSize: 20}}>Alpha</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.friend}>
						<View style={styles.friendText}>
							<Text style={{color: 'white', fontSize: 20}}>Richard</Text>
						</View>
					</TouchableOpacity>
				</View>
                <View>
					<TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QuizScreen')}>
						<View style={styles.center}>
							<Text style={{fontSize: 20}}>Start</Text>
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
	friend: {
		width: 280,
		height: 50,
		borderRadius: 5,
		margin: 8,
		paddingLeft: 15,
		backgroundColor: Colors.LIGHT_BLUE,
	},
	friendText: {
		flex: 1,
		justifyContent: "center",
	},
	searchFriend: {
		width: 280,
		height: 50,
		borderRadius: 5,
		margin: 8,
		paddingLeft: 15,
		backgroundColor: 'white',
	},
});
