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
				<view>
				<TouchableOpacity
					onPress={() => navigation.navigate('QuizScreen')}
					style={styles.button}>
					<Text style={{ flex: 1, fontSize: 22, color: 'black' }}>Quick Game</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}>
					<Text style={{ flex: 1, fontSize: 22, color: 'black' }}>Start New Game</Text>
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
