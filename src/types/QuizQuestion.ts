import Vocabulary from '../types/Vocabulary';

class QuizQuestion {
    question: Vocabulary;
    answers: string[];

    constructor( question: Vocabulary, answers: string[] ) {
        this.question = question;
        this.answers = answers;
    }

    getQuestion() {
        return this.question;
    }

    getAnswers() {
        return this.answers;
    }
}       

export default QuizQuestion;