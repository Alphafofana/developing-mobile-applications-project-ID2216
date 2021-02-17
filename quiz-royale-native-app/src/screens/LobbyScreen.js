import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Button, Alert } from "react-native";
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
				<Text>Lobby</Text>
				<Text>Your invites</Text>
				<View>
					<TouchableOpacity onPress={() => navigation.navigate('QuizScreen')}>
						<InviteCard/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('QuizScreen')}>
						<InviteCard/>
					</TouchableOpacity>
				</View>
				<view>
				<Button
					title="Quick Game"
					onPress={() => navigation.navigate('QuizScreen')}
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
	main: {
		flex: 1,
		backgroundColor: Colors.MIDDLE_BLUE,
	},
});
