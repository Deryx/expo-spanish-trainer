import React from 'react';
import Vocabulary from '../../types/Vocabulary';

interface QuestionProps {
    question: string;
    answers: string[];
}

const QuizQuestion = ({ question, answers }: QuestionProps) => {
    return (
        <>
            <dl>
                <dt>{ question }</dt>
                <dd>
                    {
                        answers.map(( answer, index) =>
                            <>
                                <input key={`answer-${index}`} type="radio" />
                                <label key={`answer-label-${index}`} htmlFor={`answer-${index}`}>{ answer }</label>
                            </>
                        )
                    }
                </dd>
            </dl> 
        </>
    );
};

export default QuizQuestion;