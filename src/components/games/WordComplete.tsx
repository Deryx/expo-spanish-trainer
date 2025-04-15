import React from "react";

interface WordCompleteProps {
    question: string;
    answer: string;
}

const WordComplete = ({ question, answer }: WordCompleteProps) => {
    const ANSWER_ARRAY = answer.split('');

    return (
        <>
            <dl>
                <dt>{ question }</dt>
                <dd>
                    { ANSWER_ARRAY.map((letter, index) => 
                        <input type="text" value={letter} />
                    )}
                </dd>
            </dl>
        </>
    )
};

export default WordComplete;