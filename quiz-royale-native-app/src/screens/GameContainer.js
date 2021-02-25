import React, { useEffect, useState } from "react";
import QuizScreen from "./QuizScreen";
import EndScreen from "./EndScreen";
import MiddleScreen from "./MiddleScreen";

const screens = {
	QUESTION_SCREEN: "question-screen",
	MID_SCREEN: "mid-screen",
	END_SCREEN: "end-screen",
};

function GameContainer({ navigation }) {
	const [questions, setQuestions] = useState(false);
	const [tick, setTick] = useState(0);
	const [state, setState] = useState({
		users: [
			{ name: "Rillmeister", answer: "Grape" },
			{ name: "User", answer: "Grape" },
		],
		screen: screens.QUESTION_SCREEN,
		usersEliminatedLastRound: [],
		question: "Loading...",
		correctAnswer: "Loading",
		incorrectAnswers: ["Loading.", "Loading..", "Loading..."],
		round: 1,
		remainingUsers: 2,
		startingUsers: 2,
		questions: [],
		userHasWon: false,
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
						questions: data.results,
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

		if(answer == state.correctAnswer){
			if(state.round == 10){
				setState((prevState) => ({ ...prevState, screen: screens.END_SCREEN, userHasWon: true }));
			} else {
				setState((prevState) => ({ ...prevState, screen: screens.MID_SCREEN, question: state.questions[state.round].question, correctAnswer: state.questions[state.round].correct_answer, incorrectAnswers: state.questions[state.round].incorrect_answers, round: state.round + 1 }));
			}
		} else {
			setState((prevState) => ({ ...prevState, screen: screens.END_SCREEN }));
		}
	};
	
	function goToQuestionScreen(){
		setState((prevState) => ({ ...prevState, screen: screens.QUESTION_SCREEN }))
	}

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
					navigation={navigation}
				/>
			)}
			{state.screen == screens.MID_SCREEN && (
				<MiddleScreen
					eliminated={state.usersEliminatedLastRound}
					users={state.users}
					round={state.round - 1}
					onNextQuestion={goToQuestionScreen}
					navigation={navigation}
				/>
			)}
			{state.screen == screens.END_SCREEN && (
				<EndScreen
					userHasWon={state.userHasWon}
					navigation={navigation}
				/>
			)
			
			}
		</>
	);
}

export default GameContainer;
