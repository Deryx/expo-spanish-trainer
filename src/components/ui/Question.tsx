import React from 'react';
import Vocabulary from '../../types/Vocabulary';

interface QuestionProps {
    question: Vocabulary;
    answers: string[];
}

const Question = ({ question, answers }: QuestionProps) => {
    const ANSWERS: string[] = [...answers, question.getTranslation()];

    return (
       <form action="">
           <fieldset>
               <dl>
                    <dt>{ question.getWord() }</dt>
                    <dd>
                        {
                            ANSWERS.map(( answer, index) =>
                                <>
                                    <input key={`answer-${index}`} type="radio" />
                                    <label key={`answer-label-${index}`} htmlFor={`answer-${index}`}>{ answer }</label>
                                </>
                            )
                        }
                    </dd>
                </dl> 
           </fieldset>
       </form>
    );
};

export default Question;