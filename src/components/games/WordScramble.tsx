import React from "react";

interface WordScrambleProps {
    question: string;
    answer: string;
}

const WordScramble = ({ question, answer }: WordScrambleProps) => {
    const ANSWER_ARRAY = answer.split('');

    return (
        <>
            <dl>
                <dt>{ question }</dt>
                <dd>
                    { ANSWER_ARRAY.map((letter, index) =>
                        <div key={`answer-${index}`}>
                            { letter }
                        </div>
                    )}
                </dd>
            </dl>
        </>
    )
};

export default WordScramble;