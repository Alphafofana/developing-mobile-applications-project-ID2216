import React, { useEffect, useState } from "react";
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
			{ name: "banan", isBot: true, answer: "Grape" },
			{ name: "gurka", isBot: true, answer: "Grape" },
			{ name: "edvin", isBot: false, answer: "Banana" },
		],
		screen: screens.QUESTION_SCREEN,
		usersEliminatedLastRound: ["banandryck", "chokladsmak", "peppar"],
		question: "Which is blue",
		correctAnswer: "Bananassss",
		incorrectAnswers: ["Grape", "Orange", "Pear"],
		round: 1,
		remainingUsers: 3,
		startingUsers: 10,
	});

	const doGameLogic = () => {
		setState((prevState) => {
			if (prevState.screen === screens.MID_SCREEN) {
				return { ...prevState, screen: screens.QUESTION_SCREEN };
			} else {
				return { ...prevState, screen: screens.MID_SCREEN };
			}
		});
	};

	useEffect(() => {
		const interval = setInterval(() => {
			doGameLogic();
		}, 8000);

		return () => clearInterval(interval);
	}, []);

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
				/>
			)}
			{state.screen == screens.MID_SCREEN && (
				<MiddleScreenMock count={42} />
			)}
		</>
	);
}

export default GameContainer;
