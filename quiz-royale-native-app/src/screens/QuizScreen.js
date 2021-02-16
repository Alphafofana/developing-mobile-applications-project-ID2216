import React from "react";
import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
import Colors from "../colors";
import Header from "../components/Header";
import NavigationBar from "../components/NavigationBar";
import Question from "../components/Question";
import QuestionAlternative from "../components/QuestionAlternative";

const question = {
	text: "Which is yellow?",
};

const alternatives = [
	{ text: "banana", id: 1 },
	{ text: "green", id: 2 },
	{ text: "purple", id: 3 },
	{ text: "monkey", id: 4 },
];

const renderItem = (alternative) => {
	console.log(alternative);
	return <QuestionAlternative text={alternative.item.text} />;
};

function QuizScreen() {
	return (
		<>
			<Header />
			<SafeAreaView style={styles.main}>
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
});
export default QuizScreen;
