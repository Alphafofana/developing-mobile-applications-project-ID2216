import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function EndScreen({navigation}) {
	return (
		<>
            <Header/>
			<View style={styles.main}>
                <Text style={{fontSize: 24, color: 'white'}}>Winner</Text>
                <Text style={{fontSize: 18, color: 'white'}}>Username of the winner</Text>
                <br></br>
                <View style={{flex: 1, justifyContent: "space-between"}}>
                    <View style={StyleSheet.mainmiddlescreen}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Eliminated</Text>
                        <View style={styles.line}></View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LobbyScreen')}>
                        <View style={styles.center}>
                            <Text style={{fontSize: 18}}>Back to Lobby</Text>
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
        marginBottom: 20,
	},
	center: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
    mainmiddlescreen: {
        flex: 1,
        textAlign: "left",
    },
    line: {
        borderBottomColor: "white",
        borderBottomWidth: 2,
        width: 280,
    }
});

