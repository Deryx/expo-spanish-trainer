import React from "react";
import QuizQuestion from "../ui/QuizQuestion";

interface WordQuizProps {
  question: string,
  answers: string[]  
}

const WordQuiz = ({ question, answers }: WordQuizProps) => {
    return (
        <QuizQuestion question={question} answers={answers} />    
    )
}   

export default WordQuiz;