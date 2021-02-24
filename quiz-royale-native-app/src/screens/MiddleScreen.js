import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";

export default function MiddleScreen({navigation}) {
    const alive = [
		"Richard",
		"Edvin",
		"Alpha",
	];
    const eliminatedThisRound = ["Agnes"];
    const round = "1";

	return (
		<>
            <Header/>
			<View style={styles.main}>
                <Text style={{fontSize: 24, color: 'white'}}>{"Round " + round}</Text>
                <View style={{flex: 1, justifyContent: "space-between"}}>
                    <View style={StyleSheet.mainmiddlescreen}>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Alive</Text>
                        <View style={styles.line}></View>
                        {alive.map(person => (<Text style={{fontSize: 18, color: 'white'}}>{person}</Text>))}
                        <br></br>
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Eliminated this round</Text>
                        <View style={styles.line}></View>
                        {eliminatedThisRound.map(person => (<Text style={{fontSize: 18, color: 'white'}}>{person}</Text>))}
                        {/*
                        <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>Eliminated</Text>
                        <View style={styles.line}></View>
                        */}
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LobbyScreen')}>
                        <View style={styles.center}>
                            <Text style={{fontSize: 18}}>Leave Game</Text>
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
		backgroundColor: "#C4C4C4",
		width: 250,
		height: 40,
		borderRadius: 10,
		margin: 5,
        marginRight: 0,
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

