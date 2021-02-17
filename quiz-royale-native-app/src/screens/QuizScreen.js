import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Question from "../components/Question";
import QuestionAlternative from "../components/QuestionAlternative";

const question = {
	text: "Which is yellow?",
};

function QuizScreen() {
	const [alternatives, setAlternatives] = useState([
		{ text: "banana", id: 1, selected: false },
		{ text: "green", id: 2, selected: false },
		{ text: "purple", id: 3, selected: false },
		{ text: "monkey", id: 4, selected: false },
	]);

	function onPress(text) {
		setAlternatives((prevAlternatives) =>
			prevAlternatives.map((alt) => {
				if (alt.text === text) {
					alt.selected = true;
				} else {
					alt.selected = false;
				}
				return alt;
			})
		);
	}

	const renderItem = (alternative) => {
		console.log(alternative);
		return (
			<QuestionAlternative
				text={alternative.item.text}
				selected={alternative.item.selected}
				handlePress={onPress}
			/>
		);
	};

	return (
		<>
			<Header />
			<SafeAreaView style={styles.main}>
				<View style={styles.metaInfo}>
					<Text style={styles.metaInfoText}>Round 1</Text>
					<Text style={styles.metaInfoText}>Remaining: 2/2</Text>
				</View>
				<Question text={question.text} />
				<FlatList
					data={alternatives}
					renderItem={renderItem}
					numColumns={2}
					keyExtractor={(alternative) => alternative.id}
				/>
			</SafeAreaView>
			<NavigationBar />
		</>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: Colors.MIDDLE_BLUE,
	},
	metaInfo: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 7,
	},
	metaInfoText: {
		color: Colors.WHITE,
		fontSize: 24,
	},
});
export default QuizScreen;
