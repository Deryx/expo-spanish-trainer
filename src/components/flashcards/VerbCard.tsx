import React from 'react';
import Verb from '../../types/Verb';
import Conjugations from '../../types/Conjugations';

interface IVerbCardProps {
    verb: Verb;
    conjugations: Conjugations;
}

const VerbCard = ({ verb, conjugations }: IVerbCardProps) => { 
    return (
        <>
            <section>
                <h3>{ verb.infinitive }</h3>
                <div>{ verb.translation }</div>
                <div>{ verb.pronunciation }</div>
            </section>
            <section>
                <h3>{ conjugations.tense } tense</h3>
                <dl>
                    <dt>Yo: </dt>
                    <dd>{ conjugations.getYo() }</dd>
                    <dt>Tu: </dt>
                    <dd>{ conjugations.getTu() }</dd>
                    <dt>El/Ella/Usted: </dt>
                    <dd>{ conjugations.getEl() }</dd>
                    <dt>Nosotros: </dt>
                    <dd>{ conjugations.getNosotros() }</dd>
                    <dt>Vosotros: </dt>
                    <dd>{ conjugations.getVosotros() }</dd>
                    <dt>Ellos/Ellas/Ustedes: </dt>
                    <dd>{ conjugations.getEllos() }</dd>
                </dl>
            </section>
        </>
    )
}

export default VerbCard;