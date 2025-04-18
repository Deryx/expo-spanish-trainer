import React from "react";
import QuizQuestion from "../ui/QuizQuestion";

interface VocabularyQuizProps {
  question: string,
  answers: string[]  
}

const VocabularyQuiz = ({ question, answers }: VocabularyQuizProps) => {
    return (
        <QuizQuestion question={question} answers={answers} />    
    )
}   

export default VocabularyQuiz;