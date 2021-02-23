class QuizModel {
    constructor(props) {
        this.question = "";
        this.correctAnswer = ""
        this.incorrectAnswers = [];
        this.category;
    }

    getCategories() {
        return fetch(`https://opentdb.com/api_category.php`)   
            .then(response => response.json())
            .then(data => data)
            .catch(console.error);
    }

    setQuestions(cat) {
        return fetch(`https://opentdb.com/api.php?amount=1&category=${cat}&type=multiple`, {})
            .then(response => response.json())
            .then(data => data)
            .catch(console.error)
    }

    setQuestion(question) {
        this.question = question;
    }

    setCorrectAnswer(ans) {
        this.correctAnswer = ans;
    }

    setIncorrectAnswers(incorrectAns) {
        this.incorrectAnswers = incorrectAns;
    }

    setIncorrectAnswers(categoryNum) {
        this.category = categoryNum;
    }

    getQuestion() {
        return this.question;
    }

    getCorrectAnswer() {
        return this.correctAnswer;
    }

    getIncorrectAnswers() {
        return this.incorrectAnswers;
    }

    getIncorrectAnswers() {
        return this.category;
    }
}

const quiz = new QuizModel();
export default quiz;
