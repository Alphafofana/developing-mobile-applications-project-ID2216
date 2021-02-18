import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LobbyScreen from "./src/screens/LobbyScreen";
import QuizScreen from "./src/screens/QuizScreen";
import QuizWizardCategories from "./src/screens/QuizWizardCategories";
import QuizWizardInvite from "./src/screens/QuizWizardInvite";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="LobbyScreen" component={LobbyScreen} />
			<Stack.Screen name="QuizScreen" component={QuizScreen} />
			<Stack.Screen name="QuizWizardCategories" component={QuizWizardCategories} />
			<Stack.Screen name="QuizWizardInvite" component={QuizWizardInvite} />
		</Stack.Navigator>
		</NavigationContainer> 
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
