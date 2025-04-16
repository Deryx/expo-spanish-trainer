import React from "react";
import { View, Text } from "react-native";
import FillinQuestion from "../ui/FillinQuestion";

type QUESTION_ANSWER_PAIR = {
    question: string,
    answer: string
};

interface WordFillInProps {
    questionBattery: QUESTION_ANSWER_PAIR[];
}

const WordFillIn = ({ questionBattery }: WordFillInProps) => {
    return (
        <>
            { 
                questionBattery.map(( question ) => 
                    <FillinQuestion key={question.question} question={question.question} />
            )}
        </>
    )
};

export default WordFillIn;