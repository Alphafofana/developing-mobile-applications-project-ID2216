import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import quiz from "../Model/QuizModel";

export default function QuizWizardCategories({navigation}) {
	function getQuestions(cat){
		/*
		quiz.getCategories().then(data => {
			console.log(data);
		});*/
		
		quiz.setQuestions(cat).then(data => {
			console.log(data);
		});
	}

	return (
		<>
            <Header/>
			<View style={styles.main}>
				<Text style={{fontSize: 24, color: 'white'}}>Quiz Wizard</Text>
				<View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.category} value={"21"} onPress={() => getQuestions("21")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Sports</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.category} value={"23"}  onPress={() => getQuestions("23")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>History</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.category} value={"17"}  onPress={() => getQuestions("17")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Science</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.category} value={"24"}  onPress={() => getQuestions("24")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Politics</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.category} value={"20"}  onPress={() => getQuestions("20")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Mythology</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.category} value={"11"}  onPress={() => getQuestions("11")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Movies</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.row}>
						<TouchableOpacity style={styles.category} value={"12"}  onPress={() => getQuestions("12")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Music</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={styles.category} value={"9"}  onPress={() => getQuestions("9")}>
							<View style={styles.center}>
								<Text style={{color: 'white', fontSize: 20}}>Other</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
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
	category: {
		width: 140,
		height: 50,
		borderRadius: 5,
		margin: 10,
		backgroundColor: Colors.LIGHT_BLUE,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
	}
});
