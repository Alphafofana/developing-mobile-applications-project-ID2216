class QuizModel {
    constructor(props) {
        this.questions = [];
        this.answers = [];
        this.pendingAnswer = "";
        this.numberOfQuestions = Number;
        this.category = Number;
        this.difficulty = String;
        this.type = String;
    }

    getCategories() {
        return fetch(`https://opentdb.com/api_category.php`)   
            .then(response => response.json())
            .then(data => data)
            .catch(console.error);
    }

    setQuestions(cat) {
        return fetch(`https://opentdb.com/api.php?amount=2&category=${cat}&type=multiple`, {})
            .then(response => response.json())
            .then(data => data)
            .catch(console.error)
    }
}

const quiz = new QuizModel();
export default quiz;
