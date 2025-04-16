import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuestionProps {
    question: string;
    answers: string[];
}

const QuizQuestion = ({ question, answers }: QuestionProps) => {
    return (
        <>
            <View>
                <Text>{ question }</Text>

                <View>
                    {
                        answers.map(( answer, index) =>
                            <>
                                <input key={`answer-${index}`} type="radio" />
                                <label key={`answer-label-${index}`} htmlFor={`answer-${index}`}>{ answer }</label>
                            </>
                        )
                    }
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    
});

export default QuizQuestion;