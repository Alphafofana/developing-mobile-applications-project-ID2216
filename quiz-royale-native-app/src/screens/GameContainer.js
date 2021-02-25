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
	const [questions, setQuestions] = useState(false);
	const [tick, setTick] = useState(0);
	const [state, setState] = useState({
		users: [
			{ name: "banan", isBot: true, answer: "Grape" },
			{ name: "gurka", isBot: true, answer: "Grape" },
			{ name: "edvin", isBot: false, answer: "Banana" },
		],
		screen: screens.QUESTION_SCREEN,
		usersEliminatedLastRound: [],
		question: "Loading...",
		correctAnswer: "Loading",
		incorrectAnswers: ["Loading.", "Loading..", "Loading..."],
		round: 1,
		remainingUsers: 3,
		startingUsers: 10,
	});

	useEffect(() => {
		const cat = 21;
		function loadData() {
			fetch(
				`https://opentdb.com/api.php?amount=10&category=${cat}&type=multiple`,
				{}
			)
				.then((response) => response.json())
				.then((data) => {
					setQuestions((prevState) => ({
						...prevState,
						questions: data.results,
					}));
					setState((prevState) => ({
						...prevState,
						question: data.results[0].question,
						correctAnswer: data.results[0].correct_answer,
						incorrectAnswers: data.results[0].incorrect_answers,
					}));
				})
				.catch(console.error);
		}

		loadData();
	}, []);

	const onUserSelectAnswer = (answer) => {
		const users = [...state.users].map((user) => {
			if (user.isBot == false) {
				user.answer = answer;
			}
			return user;
		});

		setState((prevState) => ({ ...prevState, users }));
	};

	const doGameLogic = () => {
		setState((prevState) => {
			console.log(prevState);
			if (prevState.screen === screens.MID_SCREEN) {
				return { ...prevState, screen: screens.QUESTION_SCREEN };
			} else {
				const eliminatedUsers = state.users
					.filter((user) => user.answer !== state.correctAnswer)
					.map((user) => user.name);

				const remainingUsers =
					state.users.length - eliminatedUsers.length;
				console.log(state.correctAnswer);
				const users = [...state.users]
					.filter((user) => user.answer == state.correctAnswer)
					.map((user) => ({ ...user, answer: "" }));
				return {
					...prevState,
					usersEliminatedLastRound: eliminatedUsers,
					remainingUsers,
					users,
					screen: screens.MID_SCREEN,
				};
			}
		});
		setTick((prevTick) => prevTick + 1);
	};

	useEffect(() => {
		setTimeout(doGameLogic, 8000);
	}, [tick]);

	return (
		<>
			{state.screen == screens.QUESTION_SCREEN && (
				<QuizScreen
					question={state.question}
					alternatives={[
						...state.incorrectAnswers,
						state.correctAnswer,
					]}
					round={state.round}
					remainingUsers={state.remainingUsers}
					startingUsers={state.startingUsers}
					onAnswer={onUserSelectAnswer}
				/>
			)}
			{state.screen == screens.MID_SCREEN && (
				<MiddleScreenMock
					eliminated={state.usersEliminatedLastRound}
					users={state.users}
				/>
			)}
		</>
	);
}

export default GameContainer;
