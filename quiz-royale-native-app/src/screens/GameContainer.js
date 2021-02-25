import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import QuizScreen from "./QuizScreen";
import MiddleScreenMock from "./MiddleScreenMock";
import QuizModel from "../Model/QuizModel";

const screens = {
	QUESTION_SCREEN: "question-screen",
	MID_SCREEN: "mid-screen",
	END_SCREEN: "end-screen",
};

function GameContainer() {
	const [state, setState] = useState({
		users: [
			{ name: "gurka", isBot: true, answer: "Grape" },
			{ name: "edvin", isBot: false, answer: "Banana" },
		],
		screen: screens.QUESTION_SCREEN,
		usersEliminatedLastRound: [],
		questions: [
			{
				category: "Sports",
				type: "multiple",
				difficulty: "hard",
				question:
					"How many times did Martina Navratilova win the Wimbledon Singles Championship?",
				correct_answer: "Nine",
				incorrect_answers: ["Ten", "Seven", "Eight"],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "easy",
				question:
					"In golf, what name is given to a hole score of two under par?",
				correct_answer: "Eagle",
				incorrect_answers: ["Birdie", "Bogey", "Albatross"],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question: "Which team was the 2015-2016 NBA Champions?",
				correct_answer: "Cleveland Cavaliers",
				incorrect_answers: [
					"Golden State Warriors",
					"Toronto Raptors",
					"Oklahoma City Thunders",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "hard",
				question:
					"Which female player won the gold medal of table tennis singles in 2016 Olympics Games?",
				correct_answer: "DING Ning (China)",
				incorrect_answers: [
					"LI Xiaoxia (China)",
					"Ai FUKUHARA (Japan)",
					"Song KIM (North Korea)",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"In Formula 1, the Virtual Safety Car was introduced following the fatal crash of which driver?",
				correct_answer: "Jules Bianchi",
				incorrect_answers: [
					"Ayrton Senna",
					"Ronald Ratzenberger",
					"Gilles Villeneuve",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"Which of the following Grand Slam tennis tournaments occurs LAST?",
				correct_answer: "US Open",
				incorrect_answers: [
					"French Open",
					"Wimbledon",
					"Australian Open",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"Who won the 2015 College Football Playoff (CFP) National Championship? ",
				correct_answer: "Ohio State Buckeyes",
				incorrect_answers: [
					"Alabama Crimson Tide",
					"Clemson Tigers",
					"Wisconsin Badgers",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"Which NBA player won Most Valuable Player for the 1999-2000 season?",
				correct_answer: "Shaquille O&#039;Neal",
				incorrect_answers: [
					"Allen Iverson",
					"Kobe Bryant",
					"Paul Pierce",
				],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"How many premier league trophies did Sir Alex Ferguson win during his time at Manchester United?",
				correct_answer: "13",
				incorrect_answers: ["11", "20", "22"],
			},
			{
				category: "Sports",
				type: "multiple",
				difficulty: "medium",
				question:
					"Who is Manchester United&#039;s top premier league goal scorer?",
				correct_answer: "Wayne Rooney",
				incorrect_answers: [
					"Sir Bobby Charlton",
					"Ryan Giggs",
					"David Beckham",
				],
			},
		],
		round: 1,
		remainingUsers: 2,
		startingUsers: 2,
	});

	const onUserSelectAnswer = (answer) => {
		if (answer == state.questions[0].correct_answer) {
			// TODO: IMPLEMENT
			// setState((prevState) => {
			// 	return {
			// 		...prevState,
			// 		round: prevState.round + 1,
			// 		question: questions[2].question,
			// 		correctAnswer: questions[1].correct_answer,
			// 		incorrectAnswers: questions[1].incorrect_answers,
			// 	};
			// });
		}
	};

	// const doGameLogic = () => {
	// 	setState((prevState) => {
	// 		console.log(prevState);
	// 		if (prevState.screen === screens.MID_SCREEN) {
	// 			return { ...prevState, screen: screens.QUESTION_SCREEN };
	// 		} else {
	// 			const eliminatedUsers = state.users
	// 				.filter((user) => user.answer !== state.correctAnswer)
	// 				.map((user) => user.name);

	// 			const remainingUsers =
	// 				state.users.length - eliminatedUsers.length;
	// 			console.log(state.correctAnswer);
	// 			const users = [...state.users]
	// 				.filter((user) => user.answer == state.correctAnswer)
	// 				.map((user) => ({ ...user, answer: "" }));
	// 			return {
	// 				...prevState,
	// 				usersEliminatedLastRound: eliminatedUsers,
	// 				remainingUsers,
	// 				users,
	// 				screen: screens.MID_SCREEN,
	// 			};
	// 		}
	// 	});
	// 	setTick((prevTick) => prevTick + 1);
	// };

	return (
		<>
			{state.screen == screens.QUESTION_SCREEN && (
				<QuizScreen
					question={state.questions[0].question}
					alternatives={[
						...state.questions[0].incorrect_answers,
						state.questions[0].correct_answer,
					]}
					round={state.round}
					remainingUsers={state.remainingUsers}
					startingUsers={state.startingUsers}
					onAnswer={onUserSelectAnswer}
				/>
			)}
			{state.screen == screens.MID_SCREEN && (
				<MiddleScreenMock
				// eliminated={state.usersEliminatedLastRound}
				// users={state.users}
				/>
			)}
		</>
	);
}

export default GameContainer;
