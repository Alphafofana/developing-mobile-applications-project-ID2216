class QuizModel {
    constructor(props) {
        this.question = "";
        this.answers = [];
        this.category = Number;
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
}

const quiz = new QuizModel();
export default quiz;
