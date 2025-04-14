import React from "react";
import Question from "../ui/Question";
import QuizQuestion from "../../types/QuizQuestion";

interface WordQuizProps {
  quizQuestions: QuizQuestion[];  
}

const WordQuiz = ({ quizQuestions }: WordQuizProps) => {
    return (
        quizQuestions.map(( question, index ) =>
            <Question key={`question-${index}`} question={question.getQuestion()} answers={question.getAnswers()} />    
        )
    )
}   

export default WordQuiz;