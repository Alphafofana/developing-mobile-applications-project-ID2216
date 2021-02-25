import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import LobbyScreen from "./src/screens/LobbyScreen";
import GameContainer from "./src/screens/GameContainer";
import QuizWizardCategories from "./src/screens/QuizWizardCategories";
import QuizWizardInvite from "./src/screens/QuizWizardInvite";
import EndScreen from "./src/screens/EndScreen";
import MiddleScreen from "./src/screens/MiddleScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import { useAuth, AuthProvider } from "./src/services/FirebaseAuthContext";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<Stack.Navigator
					initialRouteName="MiddleScreen"
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name="LoginScreen" component={LoginScreen} />
					<Stack.Screen
						name="RegisterScreen"
						component={RegisterScreen}
					/>
					<Stack.Screen
						name="ProfileScreen"
						component={ProfileScreen}
					/>

					<Stack.Screen name="LobbyScreen" component={LobbyScreen} />
					<Stack.Screen name="QuizScreen" component={QuizScreen} />
					<Stack.Screen name="MiddleScreen" component={MiddleScreen} />
					<Stack.Screen name="QuizWizardCategories" component={QuizWizardCategories} />
					<Stack.Screen name="QuizWizardInvite" component={QuizWizardInvite} />
					<Stack.Screen name="EndScreen" component={EndScreen} />
					<Stack.Screen
						name="GameContainer"
						component={GameContainer}
					/>
					<Stack.Screen
						name="QuizWizardCategories"
						component={QuizWizardCategories}
					/>
					<Stack.Screen
						name="QuizWizardInvite"
						component={QuizWizardInvite}
					/>
				</Stack.Navigator>
			</AuthProvider>
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
