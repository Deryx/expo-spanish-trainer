import React from "react";

interface WordFillInProps {
    question: string
} 

const WordFillIn = ({ question }: WordFillInProps) => {
    return (
        <>
            <dl>
                <dt>{ question }</dt>
                <dd>
                    <input type="text" />
                </dd>
            </dl>
        </>
    )
};

export default WordFillIn;